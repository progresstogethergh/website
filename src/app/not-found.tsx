import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center py-16">
      <div className="bg-muted sketchy-border p-8 sm:p-12 md:p-16 rounded-[30px] md:rounded-[40px] max-w-2xl mx-auto flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-8">
          <Compass className="w-10 h-10" />
        </div>
        <h1 className="text-6xl md:text-8xl font-heading text-primary mb-4">404</h1>
        <h2 className="text-3xl font-heading mb-6">Page Not Found</h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-md mx-auto leading-relaxed">
          Oops! It looks like we&apos;ve wandered off the path. The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/">
          <Button size="lg" className="sketchy-btn bg-secondary text-secondary-foreground hover:bg-secondary/90 border-secondary px-8 py-6 text-lg">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
