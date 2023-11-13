import { Skeleton } from "./ui/skeleton";

export function UserButtonSkeleton() {
  return <Skeleton className="h-10 w-10 rounded-full" />;
}

export function ImageSliderSkeleton() {
  return (
    <div className="flex gap-3">
      <Skeleton className="h-32 w-32 " />
      <Skeleton className="h-32 w-32 " />
      <Skeleton className="h-32 w-32 " />
      <Skeleton className="h-32 w-32 " />
    </div>
  );
}

export function CategorySkeleton() {
  return (
    <div className="flex flex-col gap-3">
      <Skeleton className="w-15 h-10 " />
      <Skeleton className="w-15 h-10 " />
      <Skeleton className="w-15 h-10 " />
      <Skeleton className="w-15 h-10 " />
      <Skeleton className="w-15 h-10 " />
      <Skeleton className="w-15 h-10 " />
      <Skeleton className="w-15 h-10 " />
    </div>
  );
}

export function ProductSkeleton() {
  return <Skeleton className="h-90 w-90 rounded-md" />;
}
export function ProductListSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
      <Skeleton className="h-60 w-60" />
      <Skeleton className="h-60 w-60" />
      <Skeleton className="h-60 w-60" />
      <Skeleton className="h-60 w-60" />
      <Skeleton className="h-60 w-60" />
      <Skeleton className="h-60 w-60" />
      <Skeleton className="h-60 w-60" />
      <Skeleton className="h-60 w-60" />
      <Skeleton className="h-60 w-60" />
    </div>
  );
}
