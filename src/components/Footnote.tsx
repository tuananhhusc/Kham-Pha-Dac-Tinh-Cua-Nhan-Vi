export default function Footnote({
    index,
    content
}: {
    index: number;
    content: string;
}) {
    return (
        <sup id={`ref-${index}`} className="group relative cursor-pointer text-maria-blue font-semibold ml-0.5">
            <a href={`#cite-${index}`} className="no-underline hover:underline">
                [{index}]
            </a>
            {/* Tooltip on hover */}
            <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-white text-charcoal text-xs border border-gray-300 shadow-lg rounded z-50 pointer-events-none">
                {content}
                {/* Helper triangle */}
                <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white"></span>
            </span>
        </sup>
    );
}
