# Tạo tài khoản Admin — không cần cài thêm phần mềm

Tất cả thao tác dưới đây thực hiện trên trình duyệt tại [Firebase Console](https://console.firebase.google.com/). Bạn không cần Firebase CLI, service account hoặc chạy script seed.

## Bước 1: Bật đăng nhập bằng email

1. Mở Firebase Console và chọn project `register-to-participate`.
2. Chọn **Authentication** ở menu bên trái.
3. Mở tab **Sign-in method**.
4. Chọn **Email/Password**.
5. Bật tùy chọn đầu tiên **Email/Password**, rồi nhấn **Save**.

## Bước 2: Tạo tài khoản Admin

1. Vẫn trong **Authentication**, mở tab **Users**.
2. Nhấn **Add user**.
3. Nhập email admin và mật khẩu mạnh, tối thiểu 10 ký tự.
4. Nhấn **Add user**.
5. Sao chép giá trị **User UID** của tài khoản vừa tạo.

Firebase Authentication tự mã hóa mật khẩu. Không lưu mật khẩu trong Firestore hoặc source code.

## Bước 3: Cấp quyền Admin

1. Mở **Firestore Database** trong Firebase Console.
2. Chọn tab **Data**.
3. Nhấn **Start collection**.
4. Collection ID nhập chính xác: `admins`.
5. Document ID dán **User UID** đã sao chép ở bước 2.
6. Thêm các field:

| Field | Type | Value |
|---|---|---|
| `active` | boolean | `true` |
| `email` | string | Email admin |
| `displayName` | string | Tên người quản trị |

7. Nhấn **Save**.

Chỉ tài khoản vừa có trong Firebase Authentication, vừa có document `admins/{User UID}` với `active: true` mới vào được trang quản trị.

## Bước 4: Cập nhật Security Rules

1. Trong **Firestore Database**, mở tab **Rules**.
2. Mở file `firestore.rules` trong dự án này.
3. Sao chép toàn bộ nội dung file và dán vào trình soạn thảo Rules trên Firebase Console.
4. Nhấn **Publish**.

Rules ngăn người không phải admin đọc hoặc sửa `persons`, `rooms` và dữ liệu đăng ký cũ.

## Bước 5: Cho phép domain đăng nhập

Trong **Authentication → Settings → Authorized domains**, kiểm tra hoặc thêm:

- `localhost`
- `30y96q.einslight.com`
- `tunhuyhd.github.io`

## Đăng nhập

- Local: `http://localhost:4321/admin/login/`
- Custom domain: `https://30y96q.einslight.com/admin/login/`
- GitHub Pages: `https://tunhuyhd.github.io/PageForMeeting/admin/login/`

Admin có thể dùng **Quên mật khẩu** trên trang đăng nhập. Phiên tự đăng xuất sau 30 phút không hoạt động.

## Khóa tài khoản Admin

Có hai cách:

- Đổi field `active` trong `admins/{uid}` thành `false`; hoặc
- Disable tài khoản trong **Authentication → Users**.
