import type { MDXComponents } from 'mdx/types'
import AcademicBlockquote from './src/components/AcademicBlockquote'
import ComparisonTable from './src/components/ComparisonTable'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
        AcademicBlockquote,
        ComparisonTable,
    }
}
