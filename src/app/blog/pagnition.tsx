import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function Pagination({
  currentPage,
  totalPages,
  search,
}: {
  currentPage: number;
  totalPages: number;
  search: string;
}) {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 pt-4">
      {pageNumbers.map((number) => (
        <Link
          key={number}
          href={{
            pathname: "/",
            query: { ...(search ? { search } : {}), page: number },
          }}
        >
          <Badge
            variant={currentPage === number ? "secondary" : "outline"}
            className="h-8 w-8 justify-center"
          >
            {number}
          </Badge>
        </Link>
      ))}
      {currentPage < totalPages && (
        <Link
          href={{
            pathname: "/",
            query: { ...(search ? { search } : {}), page: currentPage + 1 },
          }}
          className="text-sm font-medium text-primary hover:underline"
        >
          Next
        </Link>
      )}
    </div>
  );
}
