interface BlockquoteProps {
    children: React.ReactNode;
    author?: string;
}

export default function AcademicBlockquote({ children, author }: BlockquoteProps) {
    return (
        <blockquote className="my-6 border-l-4 border-cardinal-red bg-off-white pl-6 pr-4 py-4 rounded-r-md shadow-sm">
            <div className="text-charcoal leading-relaxed italic">
                {children}
            </div>
            {author && (
                <footer className="mt-3 text-right text-sm not-italic font-medium text-text-secondary">
                    — {author}
                </footer>
            )}
        </blockquote>
    );
}
