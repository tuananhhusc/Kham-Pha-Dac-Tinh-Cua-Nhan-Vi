# Nghiên Cứu Học Thuật Về Nhân Vị (Personhood Research)

Một nỗ lực số hóa và trình bày hiện đại cho báo cáo nghiên cứu triết học/thần học về chủ đề "Nhân vị". Dự án này kết hợp nội dung học thuật sâu sắc với giao diện đọc web tối ưu, nhằm mang lại trải nghiệm tiếp cận tri thức liền mạch và thẩm mỹ.

![Project Preview](https://via.placeholder.com/800x400?text=Nhan+Vi+Research+Preview)

## 🌟 Tính Năng Nổi Bật

### Trải Nghiệm Đọc (Reading Experience)
- **Typography Tối Ưu**: Sử dụng font **Lora** (nội dung) và **Cormorant Garamond** (tiêu đề) để hiển thị tiếng Việt chuẩn mực và trang nhã.
- **Reading Progress**: Thanh tiến trình đọc tinh tế giúp người xem nắm bắt vị trí của mình trong bài nghiên cứu dài.
- **Mobile-First TOC**: Mục lục di động với nút nổi (FAB) và giao diện overlay mờ (backdrop blur), giúp điều hướng nhanh chóng trên mọi thiết bị.

### Giao Diện Học Thuật (Academic UI)
- **Footnotes System**: Hệ thống chú thích thông minh, hỗ trợ hover để xem nhanh nội dung trích dẫn.
- **Comparison Tables**: Bảng so sánh responsive, trình bày dữ liệu đối chiếu phức tạp một cách rõ ràng.
- **Print Optimization**: Giao diện in ấn (Ctrl+P) được tùy biến riêng: ẩn các thành phần điều hướng, sử dụng font serif đen trắng tiết kiệm mực và dễ đọc trên giấy.

## 🛠️ Công Nghệ Sử Dụng

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Content**: [MDX](https://mdxjs.com/) (Markdown with JSX)
- **Font**: Google Fonts (Lora, Cormorant Garamond)
- **Icons**: Heroicons / SVG

## 🚀 Cài Đặt & Chạy Local

1. **Clone dự án**
   ```bash
   git clone https://github.com/your-username/nhanvi-research.git
   cd nhanvi
   ```

2. **Cài đặt dependencies**
   ```bash
   npm install
   ```

3. **Chạy server development**
   ```bash
   npm run dev
   ```
   Truy cập `http://localhost:3000` để xem kết quả.

## 📂 Cấu Trúc Dự Án

```
d:\nhanvi\
├── src\
│   ├── app\
│   │   ├── content.mdx       # Nội dung chính của báo cáo
│   │   ├── globals.css       # Tailwind v4 configuration & Custom styles
│   │   ├── layout.tsx        # Root layout & Font setup
│   │   └── page.tsx          # Main page structure
│   └── components\
│       ├── AcademicBlockquote.tsx
│       ├── ComparisonTable.tsx
│       ├── Footnote.tsx
│       ├── MobileTOC.tsx     # Mục lục cho mobile
│       └── ReadingProgress.tsx
├── next.config.ts
├── package.json
└── README.md
```

## 📝 Bản Quyền

© 2026 Nghiên cứu Học thuật Nhân Vị.
Dự án được xây dựng phục vụ mục đích phi lợi nhuận giáo dục và lan tỏa tri thức.
