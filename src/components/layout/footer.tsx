export default function Footer() {
  return (
    <footer className="bg-muted py-6 text-center text-muted-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} TechFusion Ventures. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Innovating the Future, Automating Today.
        </p>
      </div>
    </footer>
  );
}
