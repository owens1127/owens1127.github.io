export default function Footer() {
  return (
    <footer className="mt-12 bg-gray-800 py-6">
      <div className="container mx-auto px-4 text-left">
        <p>
          &copy; {new Date().getFullYear()} Owen Simpson. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
