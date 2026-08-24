import Image from "next/image";
import Link from "next/link";

export function BrandLink() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label="Obasi Ikechukwu, home"
    >
      <span className="relative size-9 shrink-0 overflow-hidden rounded-lg border border-border bg-surface-strong transition-colors group-hover:border-signal/60">
        <Image
          fill
          src="/images/passport.jpeg"
          alt=""
          sizes="36px"
          className="object-cover object-[center_32%]"
          priority
        />
      </span>
      {/* <span className="grid size-9 place-items-center rounded-lg border border-border bg-surface-strong font-mono text-xs font-semibold tracking-tight text-foreground transition-colors group-hover:border-signal/60">
        OI
      </span> */}
      <span className="hidden leading-none sm:block">
        <span className="block text-sm font-semibold tracking-tight">
          Obasi Ikechukwu
        </span>
        <span className="mt-1 block font-recoleta text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
          Dev_Iyke Labs
        </span>
      </span>
    </Link>
  );
}
