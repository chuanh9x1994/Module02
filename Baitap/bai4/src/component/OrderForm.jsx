import React from 'react'
import { useState } from 'react';

export default function OrderForm() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [note, setNote] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();         // khi ấn submit form ngăn trang bị load lại.
        if (!name || !address || !phone) {
            setError("họ tên, địa chỉ và số điện thoại không được để trống.");
            return;
        }
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            setError("số điện thoại không đúng định dạng.");
            return;
        }

        // TODO: xử lý việc gửi thông tin đặt hàng
        setSuccess(true);
    }

    return (
        <>
            <div>OrderForm</div>
            <div>
                {!success ? (
                    <form onSubmit={handleSubmit}>
                        {error && <div style={{ color: "red" }}>{error}</div>}
                        <div>
                            <label htmlFor='name'>Họ và tên:</label>
                            <input
                                type='text'
                                id='name'
                                value={name}
                                /*
                                    sự kiện onChange, khi giá trị trong input thay đổi, hàm setName được gọi, 
                                    e.target.value để truyền giá trị nhập vào, đồng thời cập nhật giá trị mới cho name.
                                */
                                onChange={(e) => setName(e.target.value)}  
                            />
                        </div>
                        <div>
                            <label htmlFor='address'>Địa chỉ:</label>
                            <input
                                type='text'
                                id='address'
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor='phone'>Số điện thoại:</label>
                            <input
                                type='tel'
                                id='phone'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor='note'>Ghi chú:</label>
                            <textarea
                                id='note'
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                            />
                        </div>
                        <button type='submit'>Đặt hàng</button>
                    </form>
                ) : (
                    <div style={{ color: "green" }}>Đặt hàng thành công!</div>
                )}
            </div>
        </>
    )
}
