export const Icon = ({ name }: {name: string}) => icons[name]

const icons = {
  Bolt: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M240.5 224H352C365.3 224 377.3 232.3 381.1 244.7C386.6 257.2 383.1 271.3 373.1 280.1L117.1 504.1C105.8 513.9 89.27 514.7 77.19 505.9C65.1 497.1 60.7 481.1 66.59 467.4L143.5 288H31.1C18.67 288 6.733 279.7 2.044 267.3C-2.645 254.8 .8944 240.7 10.93 231.9L266.9 7.918C278.2-1.92 294.7-2.669 306.8 6.114C318.9 14.9 323.3 30.87 317.4 44.61L240.5 224z"/></svg>,
  CameraMovie: <svg viewBox="0 0 512 456" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{ fillRule: "evenodd" }}><path d="M325.949,255.741l-297.437,-0c-7.562,-0 -14.814,3.004 -20.161,8.351c-5.347,5.347 -8.351,12.599 -8.351,20.161c0,0.023 0,0.046 0,0.069c0,15.716 12.74,28.456 28.456,28.456l28.042,-0l-0,97.387c-0,11.973 4.756,23.455 13.222,31.92c8.465,8.466 19.947,13.222 31.92,13.222l225.319,0c11.259,0 22.057,-4.472 30.018,-12.434c7.961,-7.961 12.434,-18.759 12.434,-30.018c0,-33.46 0,-79.935 0,-113.652c0,-24.004 -19.459,-43.462 -43.462,-43.462Zm72.272,28.149l68.934,-50.938c8.54,-6.31 19.905,-7.274 29.385,-2.492c9.481,4.783 15.46,14.496 15.46,25.114c-0,49.401 -0,121.207 -0,170.978c0,10.855 -6.112,20.785 -15.804,25.673c-9.691,4.889 -21.31,3.904 -30.039,-2.547l-67.936,-50.2l0,-115.588Zm-284.835,-57.118c-62.579,-0 -113.386,-50.807 -113.386,-113.386c0,-62.579 50.807,-113.386 113.386,-113.386c43.136,-0 80.678,24.14 99.844,59.64c19.167,-35.5 56.709,-59.64 99.845,-59.64c62.579,-0 113.386,50.807 113.386,113.386c-0,62.579 -50.807,113.386 -113.386,113.386l-199.689,-0Zm0.149,-170.002c31.582,0 57.222,25.64 57.222,57.222c-0,31.581 -25.64,57.222 -57.222,57.222c-31.582,-0 -57.222,-25.641 -57.222,-57.222c0,-31.582 25.64,-57.222 57.222,-57.222Zm199.106,0c31.582,0 57.222,25.64 57.222,57.222c-0,31.581 -25.64,57.222 -57.222,57.222c-31.582,-0 -57.222,-25.641 -57.222,-57.222c0,-31.582 25.64,-57.222 57.222,-57.222Z"/></svg>,
  Landmark: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M240.1 4.216C249.1-1.405 262-1.405 271.9 4.216L443.6 102.4L447.1 104V104.9L495.9 132.2C508.5 139.4 514.6 154.2 510.9 168.2C507.2 182.2 494.5 192 479.1 192H31.1C17.49 192 4.795 182.2 1.071 168.2C-2.653 154.2 3.524 139.4 16.12 132.2L63.1 104.9V104L68.37 102.4L240.1 4.216zM64 224H128V416H168V224H232V416H280V224H344V416H384V224H448V420.3C448.6 420.6 449.2 420.1 449.8 421.4L497.8 453.4C509.5 461.2 514.7 475.8 510.6 489.3C506.5 502.8 494.1 512 480 512H32C17.9 512 5.46 502.8 1.373 489.3C-2.713 475.8 2.517 461.2 14.25 453.4L62.25 421.4C62.82 420.1 63.41 420.6 64 420.3V224z"/></svg>,
  MasksTheatre: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M206.9 245.1C171 255.6 146.8 286.4 149.3 319.3C160.7 306.5 178.1 295.5 199.3 288.4L206.9 245.1zM95.78 294.9L64.11 115.5C63.74 113.9 64.37 112.9 64.37 112.9c57.75-32.13 123.1-48.99 189-48.99c1.625 0 3.113 .0745 4.738 .0745c13.1-13.5 31.75-22.75 51.62-26c18.87-3 38.12-4.5 57.25-5.25c-9.999-14-24.47-24.27-41.84-27.02c-23.87-3.875-47.9-5.732-71.77-5.732c-76.74 0-152.4 19.45-220.1 57.07C9.021 70.57-3.853 98.5 1.021 126.6L32.77 306c14.25 80.5 136.3 142 204.5 142c3.625 0 6.777-.2979 10.03-.6729c-13.5-17.13-28.1-40.5-39.5-67.63C160.1 366.8 101.7 328 95.78 294.9zM193.4 157.6C192.6 153.4 191.1 149.7 189.3 146.2c-8.249 8.875-20.62 15.75-35.25 18.37c-14.62 2.5-28.75 .376-39.5-5.249c-.5 4-.6249 7.998 .125 12.12c3.75 21.75 24.5 36.24 46.25 32.37C182.6 200.1 197.3 179.3 193.4 157.6zM606.8 121c-88.87-49.38-191.4-67.38-291.9-51.38C287.5 73.1 265.8 95.85 260.8 123.1L229 303.5c-15.37 87.13 95.33 196.3 158.3 207.3c62.1 11.13 204.5-53.68 219.9-140.8l31.75-179.5C643.9 162.3 631 134.4 606.8 121zM333.5 217.8c3.875-21.75 24.62-36.25 46.37-32.37c21.75 3.75 36.25 24.49 32.5 46.12c-.7499 4.125-2.25 7.873-4.125 11.5c-8.249-9-20.62-15.75-35.25-18.37c-14.75-2.625-28.75-.3759-39.5 5.124C332.1 225.9 332.9 221.9 333.5 217.8zM403.1 416.5c-55.62-9.875-93.49-59.23-88.99-112.1c20.62 25.63 56.25 46.24 99.49 53.87c43.25 7.625 83.74 .3781 111.9-16.62C512.2 392.7 459.7 426.3 403.1 416.5zM534.4 265.2c-8.249-8.875-20.75-15.75-35.37-18.37c-14.62-2.5-28.62-.3759-39.5 5.249c-.5-4-.625-7.998 .125-12.12c3.875-21.75 24.62-36.25 46.37-32.37c21.75 3.875 36.25 24.49 32.37 46.24C537.6 257.9 536.1 261.7 534.4 265.2z"/></svg>,
  Pencil: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M421.7 220.3L188.5 453.4L154.6 419.5L158.1 416H112C103.2 416 96 408.8 96 400V353.9L92.51 357.4C87.78 362.2 84.31 368 82.42 374.4L59.44 452.6L137.6 429.6C143.1 427.7 149.8 424.2 154.6 419.5L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3zM492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75z"/></svg>,
  TreeCity: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M288 48C288 21.49 309.5 0 336 0H432C458.5 0 480 21.49 480 48V192H520V120C520 106.7 530.7 96 544 96C557.3 96 568 106.7 568 120V192H592C618.5 192 640 213.5 640 240V464C640 490.5 618.5 512 592 512H336C309.5 512 288 490.5 288 464V48zM352 112C352 120.8 359.2 128 368 128H400C408.8 128 416 120.8 416 112V80C416 71.16 408.8 64 400 64H368C359.2 64 352 71.16 352 80V112zM368 160C359.2 160 352 167.2 352 176V208C352 216.8 359.2 224 368 224H400C408.8 224 416 216.8 416 208V176C416 167.2 408.8 160 400 160H368zM352 304C352 312.8 359.2 320 368 320H400C408.8 320 416 312.8 416 304V272C416 263.2 408.8 256 400 256H368C359.2 256 352 263.2 352 272V304zM528 256C519.2 256 512 263.2 512 272V304C512 312.8 519.2 320 528 320H560C568.8 320 576 312.8 576 304V272C576 263.2 568.8 256 560 256H528zM512 400C512 408.8 519.2 416 528 416H560C568.8 416 576 408.8 576 400V368C576 359.2 568.8 352 560 352H528C519.2 352 512 359.2 512 368V400zM224 160C224 166 223 171 222 176C242 190 256 214 256 240C256 285 220 320 176 320H160V480C160 498 145 512 128 512C110 512 96 498 96 480V320H80C35 320 0 285 0 240C0 214 13 190 33 176C32 171 32 166 32 160C32 107 74 64 128 64C181 64 224 107 224 160z"/></svg>
}
