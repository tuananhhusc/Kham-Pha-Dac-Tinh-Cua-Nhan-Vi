'use client';

import { useEffect, useState } from 'react';

interface TOCItem {
    id: string;
    title: string;
    level: number;
}

export default function TableOfContents({ items }: { items: TOCItem[] }) {
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-20% 0% -80% 0%' }
        );

        items.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [items]);

    return (
        <nav className="sticky top-24 h-fit max-h-[calc(100vh-8rem)] overflow-y-auto toc-scrollbar">
            <h3 className="font-display text-lg font-semibold text-cardinal-red mb-4 px-3">
                Mục Lục
            </h3>
            <ul className="space-y-1 border-l-2 border-gray-200">
                {items.map((item) => (
                    <li key={item.id} style={{ paddingLeft: `${(item.level - 1) * 1}rem` }}>
                        <a
                            href={`#${item.id}`}
                            className={`block py-1.5 px-3 text-sm transition-all border-l-2 -ml-[2px] ${activeId === item.id
                                    ? 'border-cardinal-red text-cardinal-red font-semibold bg-cardinal-red/5'
                                    : 'border-transparent text-text-secondary hover:text-charcoal hover:border-gray-400 hover:bg-gray-50'
                                }`}
                        >
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
