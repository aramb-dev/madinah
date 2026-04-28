import { execSync } from 'node:child_process';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
// Removed unused import since we're using git log directly

export const metadata: Metadata = {
  title: 'Changelog',
  description: 'View the latest changes and updates to the application.',
};

interface Commit {
  hash: string;
  authorName: string;
  authorEmail: string;
  timestamp: number;
  subject: string;
  body: string;
  date: string;
}

async function getCommits(): Promise<Commit[]> {
  try {
    // Using a custom format that's easy to parse.
    // %H: commit hash
    // %an: author name
    // %ae: author email
    // %at: author date, UNIX timestamp
    // %s: subject
    // %b: body
    // -----GITLOG-----: custom separator
    const command = "git log --pretty=format:'%H%n%an%n%ae%n%at%n%s%n%b%n-----GITLOG-----'";
    const output = execSync(command, { encoding: 'utf8' });

    const commitsRaw = output.split('-----GITLOG-----').filter((commit) => commit.trim() !== '');

    return commitsRaw.map((commitStr) => {
      const lines = commitStr.trim().split('\n');
      const [hash, authorName, authorEmail, timestampStr, subject, ...bodyLines] = lines;
      const timestamp = Number.parseInt(timestampStr, 10);
      const date = new Date(timestamp * 1000).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
      return {
        hash,
        authorName,
        authorEmail,
        timestamp,
        subject,
        body: bodyLines.join('\n').trim(),
        date,
      };
    });
  } catch (error) {
    console.error('Failed to fetch commits:', error);
    return [];
  }
}

export default async function ChangelogPage() {
  const commits = await getCommits();

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Custom Header for Changelog */}
      <header className="border-b bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="outline" className="flex items-center space-x-2">
                  <span>←</span>
                  <span>Back to Home</span>
                </Button>
              </Link>
              <h1 className="font-bold text-2xl text-amber-700">Changelog</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-bold text-5xl text-amber-700">Application Changelog</h1>
          <p className="text-amber-600 text-xl">Track the latest updates and improvements.</p>
        </div>

        {commits.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">
            No commit history found or unable to load changelog.
          </p>
        ) : (
          <div className="space-y-8">
            {commits.map((commit) => (
              <div
                key={commit.hash}
                className="rounded-xl bg-white p-6 shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl"
              >
                <div className="mb-3">
                  <h2 className="break-words font-semibold text-2xl text-amber-800">
                    {commit.subject}
                  </h2>
                  <p className="mt-1 text-gray-500 text-sm">
                    Committed on{' '}
                    <time dateTime={new Date(commit.timestamp * 1000).toISOString()}>
                      {commit.date}
                    </time>{' '}
                    by {commit.authorName}
                  </p>
                  <p className="mt-1 text-gray-400 text-xs">
                    Commit: {commit.hash.slice(0, 7)}
                  </p>
                </div>
                {commit.body && (
                  <div className="prose prose-sm mt-4 max-w-none border-gray-200 border-t pt-3 text-gray-700">
                    <h3 className="mb-1 font-semibold text-gray-600 text-md">Details:</h3>
                    <pre className="whitespace-pre-wrap rounded-md bg-gray-50 p-3 font-mono text-sm">
                      {commit.body}
                    </pre>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
