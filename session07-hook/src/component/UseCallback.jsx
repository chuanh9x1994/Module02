import React, { memo, useCallback } from 'react'

// memo : có chức năng đi kiểm tra xem có prop nào thay đổi hay k, có thì component mới re-render, ko thì thôi.

function UseCallback() {
    console.log("useCallback đươc gọi!");

  return (
    <>
        <div>UseCallback</div>

    </>
  )
}
export default memo(UseCallback)