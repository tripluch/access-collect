import Swal from 'sweetalert2'

export const successAlert = async(text: string) => {
    const result = await Swal.fire({
        text: text,
        position: 'top',
        color: "#7F9F80",
        showClass: {
            popup: `
            animate__animated
            animate__fadeInDown
            animate__faster
          `,
          },
        hideClass: {
            popup: `
            animate__animated
            animate__fadeOutUp
            animate__faster
          `,
          },
          grow: 'row',
          showConfirmButton: false,
          showCloseButton: true,
    })
    return result
}

export const errorAlert = async(text: string) => {
  const result = await Swal.fire({
      text: text,
      position: 'top',
      color: "#FFA632",
      showClass: {
          popup: `
          animate__animated
          animate__fadeInDown
          animate__faster
        `,
        },
      hideClass: {
          popup: `
          animate__animated
          animate__fadeOutUp
          animate__faster
        `,
        },
        grow: 'row',
        showConfirmButton: false,
        showCloseButton: true,
  })
  return result
}