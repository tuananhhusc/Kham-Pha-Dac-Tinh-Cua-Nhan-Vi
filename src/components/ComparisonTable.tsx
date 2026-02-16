interface TableData {
    headers: string[];
    rows: string[][];
}

interface ComparisonTableProps {
    title?: string;
    data: TableData;
}

export default function ComparisonTable({ title, data }: ComparisonTableProps) {
    return (
        <div className="my-8 overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            {title && (
                <h4 className="font-display text-center text-lg font-semibold text-maria-blue mb-4 mt-6">
                    {title}
                </h4>
            )}
            <table className="w-full border-collapse text-sm">
                <thead className="bg-maria-blue/10">
                    <tr>
                        {data.headers.map((header, idx) => (
                            <th
                                key={idx}
                                className="border border-gray-300 p-3 text-left font-semibold text-charcoal"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.rows.map((row, rowIdx) => (
                        <tr
                            key={rowIdx}
                            className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}
                        >
                            {row.map((cell, cellIdx) => (
                                <td
                                    key={cellIdx}
                                    className="border border-gray-300 p-3 align-top leading-relaxed"
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
