import TableOfContents from '@/components/TableOfContents';
import ResearchContent from './content.mdx';
import ReadingProgress from '@/components/ReadingProgress';
import MobileTOC from '@/components/MobileTOC';

const tocItems = [
  { id: 'intro', title: '1. Dẫn nhập về Khái niệm', level: 1 },
  { id: 'section-2', title: '2. Đặc tính Chiều sâu và Tính Chủ thể', level: 1 },
  { id: 'section-2-1', title: '2.1. Tính Thống nhất Thể xác và Tinh thần', level: 2 },
  { id: 'section-2-2', title: '2.2. Tính Liên chủ thể', level: 2 },
  { id: 'section-3', title: '3. Trào lưu Thuyết Nhân vị', level: 1 },
  { id: 'section-3-1', title: '3.1. Emmanuel Mounier', level: 2 },
  { id: 'section-3-2', title: '3.2. Jacques Maritain', level: 2 },
  { id: 'section-4', title: '4. Giao lộ Chính trị Quốc tế', level: 1 },
  { id: 'section-4-1', title: '4.1. Tuyên ngôn Quốc tế Nhân quyền', level: 2 },
  { id: 'section-4-2', title: '4.2. Thuyết Cần Lao Nhân Vị Việt Nam', level: 2 },
  { id: 'section-5', title: '5. Thần học và Học thuyết Công giáo', level: 1 },
  { id: 'section-5-1', title: '5.1. Nguồn gốc Thần linh', level: 2 },
  { id: 'section-5-2', title: '5.2. Đoàn kết và Công bằng Xã hội', level: 2 },
  { id: 'section-6', title: '6. Tâm lý học và Triết lý Phương Đông', level: 1 },
  { id: 'section-6-1', title: '6.1. Liệu pháp Trọng tâm Nhân vị', level: 2 },
  { id: 'section-6-2', title: '6.2. Nhân vị và Vô Ngã Phật giáo', level: 2 },
  { id: 'section-7', title: '7. Thách thức Đạo đức Sinh học', level: 1 },
  { id: 'section-7-1', title: '7.1. Kỹ thuật Chỉnh sửa Gen (CRISPR)', level: 2 },
  { id: 'section-7-2', title: '7.2. Giao diện Não - Máy tính', level: 2 },
  { id: 'section-8', title: '8. Trí tuệ Nhân tạo và Nhân vị Điện tử', level: 1 },
  { id: 'section-8-1', title: '8.1. Tranh luận Pháp lý về AI', level: 2 },
  { id: 'section-8-2', title: '8.2. Đạo đức học AI Dựa trên Phẩm giá', level: 2 },
  { id: 'section-9', title: '9. Kết luận', level: 1 },
  { id: 'references', title: 'Nguồn trích dẫn', level: 1 },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <ReadingProgress />
      <MobileTOC items={tocItems} />
      {/* Header với gradient Maria Blue -> Cardinal Red */}
      <header className="bg-gradient-to-r from-maria-blue via-cardinal-red/90 to-cardinal-red text-white py-20 shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 drop-shadow-md">
            Khám Phá Đặc Tính Của Nhân Vị
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-4xl mx-auto leading-relaxed">
            Nền tảng Bản thể luận, Sự phát triển Lịch sử và Những Thách thức
            trong Kỷ nguyên Công nghệ Đương đại
          </p>
          {/* Removed subtitle */}
        </div>
      </header>

      {/* Main Content với 2-column layout */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 xl:gap-12">
          {/* TOC Sidebar - Hidden trên mobile */}
          <aside className="hidden lg:block">
            <TableOfContents items={tocItems} />
          </aside>

          {/* Research Content */}
          <main className="prose-academic min-w-0">
            <ResearchContent />
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-charcoal text-white/80 py-10 mt-20 border-t-4 border-vatican-gold">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-lg font-semibold mb-2">© 2026 Nghiên cứu Học thuật Nhân Vị</p>
            {/* Removed citation count */}
            {/* Removed topic tags */}
          </div>
        </div>
      </footer>
    </div>
  );
}
