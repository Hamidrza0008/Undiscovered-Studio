export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between text-sm text-muted-foreground">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
          </span>
          <span className="uppercase tracking-[0.2em] text-foreground font-semibold text-xs">
            Undiscovered Studio
          </span>
        </div>

        {/* Copyright */}
        <p>
          © {new Date().getFullYear()} Undiscovered Studio. All rights reserved.
        </p>

        {/* Signature */}
        <p>
          Designed & Developed by Hamid Rza
        </p>

      </div>
    </footer>
  );
}