import { execSync } from 'child_process';
import { Metadata } from 'next';
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
      const timestamp = parseInt(timestampStr, 10);
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
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="outline" className="flex items-center space-x-2">
                  <span>←</span>
                  <span>Back to Home</span>
                </Button>
              </Link>
              <h1 className="text-2xl font-bold text-amber-700">Changelog</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-amber-700 mb-4">Application Changelog</h1>
          <p className="text-xl text-amber-600">Track the latest updates and improvements.</p>
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
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
              >
                <div className="mb-3">
                  <h2 className="text-2xl font-semibold text-amber-800 break-words">
                    {commit.subject}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Committed on{' '}
                    <time dateTime={new Date(commit.timestamp * 1000).toISOString()}>
                      {commit.date}
                    </time>{' '}
                    by {commit.authorName}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Commit: {commit.hash.substring(0, 7)}
                  </p>
                </div>
                {commit.body && (
                  <div className="prose prose-sm max-w-none text-gray-700 mt-4 pt-3 border-t border-gray-200">
                    <h3 className="text-md font-semibold text-gray-600 mb-1">Details:</h3>
                    <pre className="whitespace-pre-wrap bg-gray-50 p-3 rounded-md text-sm font-mono">
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
