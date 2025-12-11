import { redirect } from 'next/navigation';

// TEMPORARY: Redirect home page to project showcase
// To reverse this, simply delete this file
export default function HomePage() {
  redirect('/project-showcase');
}
