# am-thuc-dia-phuong-nhom-15
# 🍜 Website Ẩm Thực Hà Nội

## 📌 Giới thiệu

Đây là dự án website giới thiệu ẩm thực Hà Nội, được xây dựng nhằm mục đích học tập và thực hành các kiến thức về **HTML, CSS và JavaScript**.

Website cung cấp thông tin về các món ăn đặc sản, nhà hàng và trải nghiệm ẩm thực tại Hà Nội.

---

## 🎯 Tính năng chính

* 🔍 **Tìm kiếm món ăn**
* 🔘 **Lọc theo danh mục** (món chính, khai vị, đồ uống)
* 📄 **Hiển thị danh sách món ăn từ JSON**
* 📦 **Popup xem chi tiết món ăn**
* 🔗 **Điều hướng giữa các trang**
* 📱 **Responsive cơ bản**

---

## 🛠️ Công nghệ sử dụng

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* JSON (dữ liệu)

---

## 📂 Cấu trúc thư mục

```plaintext
BTNhom/
│
├── index.html          # Trang chủ
├── mon-an.html         # Trang món ăn
├── nha-hang.html       # Trang nhà hàng
├── tour.html           # Trang tour
├── gioi-thieu.html     # Trang giới thiệu
│
├── style.css           # File CSS chính
├── main.js             # Xử lý logic JS
├── data.json           # Dữ liệu món ăn
│
└── images/             # Ảnh (nếu dùng local)
```

---

## 🚀 Cách chạy project

### ⚠️ Lưu ý quan trọng

Project sử dụng `fetch()` để đọc file JSON nên **KHÔNG chạy được khi mở trực tiếp bằng file://**

---

### ✅ Cách chạy đúng

#### Cách 1: Live Server (khuyến khích)

1. Mở project bằng VS Code
2. Click phải vào `index.html`
3. Chọn **Open with Live Server**

---

#### Cách 2: Python Server

```bash
python -m http.server
```

Sau đó truy cập:

```plaintext
http://localhost:8000
---

## 📌 Ghi chú

* Website chỉ mang tính chất học tập
* Dữ liệu và hình ảnh mang tính minh họa

---

## ⭐ Demo

(Mở bằng Live Server để xem đầy đủ chức năng)

---

## 📎 License

This project is for educational purposes only.
