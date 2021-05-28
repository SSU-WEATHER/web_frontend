export default {
  name: 'logo',
  props: ['color'],
  template: `
  <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M222.5 125.738C223.6 129.138 224.5 132.238 225.6 135.338C226.3 137.338 226.9 139.438 228 141.338C229.9 144.638 232 145.338 235.6 144.038C235.9 143.938 236.2 143.938 236.6 143.738C236.5 144.338 236.5 144.838 236.4 145.338C235.5 150.038 237.1 153.738 241.2 156.138C242.7 157.038 243.4 157.938 243.3 159.738C243.2 161.038 243.6 162.438 243.8 163.938C242.9 164.138 242.2 164.338 241.4 164.438C232.9 165.038 224.7 166.738 216.4 168.738C211.9 169.838 207.5 171.138 203 172.138C201.4 172.538 200.7 173.338 200.1 174.838C190.9 198.638 174.5 214.838 149.7 221.738C131.8 226.738 113.9 226.338 96.8 218.238C78.7 209.638 65.1 196.438 57.3 177.638C54.4 170.738 53.2 163.438 52.6 155.938C51.9 146.138 52.8 136.638 55.9 127.338C60.1 114.338 67.9 103.838 78.1 94.9376C87.8 86.5376 98.7 80.8376 111.2 78.1376C139.8 71.8376 173.7 81.8376 192.4 110.938C195.4 115.638 198.1 120.438 199.9 125.638C200.4 127.038 201.2 127.738 202.5 128.138C207.9 129.838 213.2 129.338 218.5 127.438C219.7 126.838 220.9 126.338 222.5 125.738ZM192.5 151.238C192.5 142.038 190.9 133.638 187.3 125.638C174.5 97.6376 145.6 83.9376 118 88.5376C101.7 91.2376 88.2 98.8376 77.9 111.738C67.4 124.838 62.6 139.938 64.5 156.738C66.6 175.238 75.2 190.138 90.5 201.038C99.2 207.238 108.8 211.438 119.5 212.838C128.8 214.138 138 213.038 147 210.538C176.8 202.138 193.1 173.738 192.5 151.238Z" :fill="color"/>
  <path d="M240.6 140.838C244 141.338 247 141.838 250 142.138C257 142.938 263.9 141.938 270.6 140.238C272.7 139.738 274.6 138.738 276.1 136.438C275.3 136.338 274.7 136.138 274.2 136.338C269.3 137.638 264.4 138.538 259.4 138.838C255.4 139.138 251.4 139.138 247.4 139.238C245.7 139.238 244.1 138.738 242.6 137.838C240.8 136.738 240.2 136.838 238.6 138.238C237.4 139.238 236.2 140.338 234.9 141.238C232.8 142.538 231.6 142.238 230.4 140.138C229.7 138.938 229.1 137.538 228.7 136.238C227.3 132.038 225.9 127.738 224.5 123.538C224.2 122.438 223.7 121.438 223.5 120.338C223 117.838 223.8 115.738 225.5 113.938C228.3 110.838 231.5 108.238 235.3 105.538C235 106.338 234.9 106.738 234.7 107.138C232.8 110.738 232.9 114.338 234.8 117.938C235.1 118.538 235.5 119.238 235.9 119.838C237.3 121.738 237.6 123.638 236.5 125.838C235 129.138 236.1 132.038 238.4 134.638C238.5 134.838 238.8 134.838 239.1 134.938C240.3 134.238 240.3 133.238 240.1 132.038C239.8 130.838 239.4 129.538 239.3 128.338C239.2 126.338 239.9 125.438 241.8 124.738C242.1 124.638 242.4 124.438 242.7 124.438C247.1 124.338 251.3 122.738 255.6 121.838C259.9 120.938 264.3 120.738 268.7 120.838C269.6 120.838 270.5 120.938 271.3 120.838C273.3 120.738 274.8 119.338 275.1 117.438C275.3 116.438 274.8 115.638 273.8 115.538C273.3 115.438 272.7 115.638 272.2 115.738C266.8 117.438 261.1 117.938 255.5 118.838C251.8 119.438 248.1 120.138 244.5 120.938C241.6 121.538 240.4 121.238 238.8 118.838C234.3 112.338 237.1 103.638 244.8 101.538C250.3 99.9376 256 99.6376 261.6 101.138C264.2 101.838 266.5 102.938 268.7 104.438C269.3 104.838 269.9 105.638 270.9 104.838C270.5 102.838 268.7 102.138 267.2 100.838C268.7 99.9376 270.3 100.138 271.6 100.338C276.2 101.138 280 103.238 282.8 107.038C284.2 108.938 285 111.038 284.6 113.538C284.2 116.038 285.2 118.238 286.6 120.238C287.7 121.838 289 123.438 290.1 125.138C292.4 128.438 292.4 129.938 290.3 133.238C288.6 135.838 288.2 138.538 289.7 141.338C290.9 143.538 290.6 145.638 289.4 147.738C288.6 149.038 287.7 150.238 286.8 151.438C284.8 154.038 283.8 156.838 284.7 160.138C285.3 162.238 284.9 162.738 282.9 163.638C280.9 164.538 279 165.438 277.1 166.538C272.8 169.138 268.1 170.138 263.1 169.738C259.4 169.438 255.8 168.938 252.3 167.938C248.8 166.938 247 164.638 246.5 161.138C246.5 160.938 246.4 160.638 246.4 160.438C246.5 157.338 245.4 155.038 242.4 153.438C239.4 151.738 238.7 148.738 239.4 145.538C239.4 143.938 240.1 142.438 240.6 140.838ZM247.2 155.738C247.3 157.338 248.2 157.738 249 157.938C250.1 158.338 251.3 158.638 252.5 158.638C255.8 158.538 259.2 158.438 262.5 158.038C266.6 157.538 270.7 156.738 274.9 157.738C275.3 157.838 275.7 157.838 276.1 157.738C277.3 157.438 277.7 156.138 276.8 155.338C276.3 154.938 275.7 154.638 275.1 154.438C273.1 153.738 271 153.738 269 154.138C262.8 155.338 256.6 156.338 250.2 155.838C249.2 155.738 248.2 155.738 247.2 155.738Z" :fill="color"/>
  <path d="M150.6 65.4376C150.3 68.9376 147.5 71.4376 144 71.1376C140.5 70.7376 137 70.2376 133.5 70.0376C126.7 69.6376 120 70.0376 113.2 71.1376C109.6 71.7376 107 69.8376 106.3 66.4376C106 65.0376 106.4 63.7376 107.1 62.5376C112.4 53.7376 117.7 44.9376 123.2 36.1376C125.8 31.9376 130.9 31.9376 133.6 36.2376C138.9 44.8376 144.2 53.5376 149.4 62.2376C149.9 63.1376 150.2 64.3376 150.6 65.4376Z" :fill="color"/>
  <path d="M111.8 229.738C115.9 230.138 119 230.438 122.2 230.838C128.9 231.638 135.4 230.938 142 230.038C143 229.938 144.1 229.738 145.1 229.838C149.2 230.138 151.5 234.138 149.9 237.838C149.5 238.638 149.1 239.338 148.6 240.138C143.8 248.038 139.1 255.838 134.3 263.738C134.1 264.038 133.9 264.438 133.7 264.738C130.8 269.038 125.8 269.038 123.1 264.638C117.8 256.038 112.5 247.338 107.3 238.638C106.1 236.638 106 234.538 107.2 232.538C108.4 230.438 110.4 229.638 111.8 229.738Z" :fill="color"/>
  <path d="M84.0999 79.4375C84.1999 81.3375 83.0999 82.8375 81.3999 84.0375C78.6999 86.0375 75.9999 88.0375 73.4999 90.2375C68.7999 94.1375 64.7999 98.6375 61.0999 103.538C60.8999 103.838 60.6999 104.038 60.4999 104.338C58.9999 106.438 56.9999 107.738 54.3999 107.238C51.5999 106.738 50.0999 104.838 49.3999 102.138C48.4999 98.6375 47.5999 95.2375 46.6999 91.7375C45.0999 85.6375 43.4999 79.5375 41.9999 73.4375C41.0999 69.7375 42.8999 66.6375 46.3999 65.9375C47.0999 65.8375 47.9999 65.8375 48.6999 66.0375C58.8999 68.5375 69.0999 71.0375 79.2999 73.5375C82.6999 74.3375 84.0999 76.2375 84.0999 79.4375Z" :fill="color"/>
  <path d="M55.7 193.638C57.6 193.538 59 194.438 60.3 195.938C61.4 197.338 62.4 198.738 63.5 200.138C68.3 206.138 73.8 211.238 80 215.738C80.7 216.238 81.4 216.738 82.1 217.338C83.9 218.938 84.6 220.838 84 223.138C83.4 225.338 81.9 226.638 79.7 227.238C76.1 228.138 72.4 229.138 68.8 230.038C62.4 231.638 56 233.238 49.5 234.738C45.8 235.638 43 234.238 42.1 231.038C41.8 229.938 41.8 228.638 42 227.538C44.5 217.838 47 208.038 49.6 198.338C50.5 195.138 52.5 193.738 55.7 193.638Z" :fill="color"/>
  <path d="M214.9 71.8377C214.8 72.3377 214.7 73.2377 214.4 74.0377C212 83.3377 209.6 92.5377 207.2 101.838C206.5 104.438 205.2 106.238 202.4 106.938C200 107.538 198.1 106.838 196.6 105.038C195.6 103.838 194.8 102.638 193.8 101.438C188.6 94.8377 182.6 89.1377 175.7 84.4377C173.7 83.1377 172.3 81.5377 172.4 78.9377C172.5 76.1377 174.1 74.2377 177.2 73.3377C179.6 72.6377 182 72.1377 184.4 71.5377C192.1 69.6377 199.9 67.6377 207.6 65.8377C211.6 64.9377 214.9 67.7377 214.9 71.8377Z" :fill="color"/>
  <path d="M8 150.538C8.1 149.038 8.7 147.938 9.6 147.038C10.5 146.138 11.5 145.338 12.6 144.738C20.7 139.938 28.9 135.238 37 130.538C38.1 129.938 39.3 129.338 40.5 129.138C44.5 128.438 47.5 131.538 47.1 135.538C46.7 139.538 46.1 143.638 45.8 147.638C45.4 152.738 45.9 157.838 46.7 162.938C46.9 164.038 47.1 165.138 47.1 166.238C47.1 170.238 43.4 173.038 39.5 171.738C38.7 171.438 37.9 171.038 37.1 170.638C28.9 165.838 20.6 161.138 12.5 156.338C11.2 155.538 10 154.538 9.1 153.438C8.6 152.538 8.4 151.438 8 150.538Z" :fill="color"/>
  <path d="M206.9 193.638C209.8 193.638 211.7 195.038 212.6 198.138C213.5 201.338 214.3 204.638 215.2 207.838C216.8 213.938 218.4 220.038 220 226.138C220.3 227.238 220.6 228.338 220.5 229.438C220.4 232.438 218 235.738 213.4 234.838C211.5 234.438 209.7 233.938 207.8 233.438C199.6 231.438 191.4 229.338 183.2 227.338C182.6 227.138 182 227.038 181.4 226.738C178.1 225.238 177.1 221.438 179.2 218.538C179.8 217.638 180.7 216.938 181.6 216.238C189.4 210.838 196 204.338 201.5 196.638C203.3 194.338 204.6 193.638 206.9 193.638Z" :fill="color"/>
  <path d="M273.5 116.938C273.2 118.638 272.4 119.338 270.9 119.338C269 119.338 267.1 119.337 265.2 119.037C267.9 118.337 270.6 117.637 273.5 116.938Z" :fill="color"/>
  <path d="M238.4 124.638C238.4 123.338 238.4 122.438 238.4 121.338C239.4 121.838 240.4 122.338 241.5 122.938C240.5 123.438 239.6 123.938 238.4 124.638Z" :fill="color"/>
  <path d="M263.1 139.738C263 139.938 262.8 140.238 262.7 140.238C259.7 140.538 256.8 140.738 253.8 140.738C256.9 140.438 260.1 140.038 263.1 139.738Z" :fill="color"/>
  <path d="M251.8 121.238C249.5 121.838 247.2 122.338 244.8 122.938C244.8 122.738 244.7 122.538 244.7 122.338C247 121.838 249.4 121.338 251.7 120.738C251.7 120.838 251.7 121.038 251.8 121.238Z" :fill="color"/>
  <path d="M237.5 127.738C237.6 128.238 237.6 128.838 237.7 129.338C237.8 129.838 237.9 130.238 238.1 131.238C236.9 129.838 237.1 128.738 237.5 127.738Z" :fill="color"/>
  <path d="M240.3 138.538C240.7 138.538 241.1 138.638 241.5 138.638C241.5 138.738 241.5 138.938 241.5 139.038C241.1 139.038 240.7 139.038 240.3 139.038C240.3 138.938 240.3 138.738 240.3 138.538Z" :fill="color"/>
  <path d="M263.2 139.738C263.8 139.638 264.4 139.638 265 139.538C265.1 139.538 265.3 139.638 265.4 139.838C264.7 139.838 263.9 139.838 263.2 139.738C263.1 139.738 263.2 139.738 263.2 139.738Z" :fill="color"/>
  <path d="M235 112.238C235 112.438 235 112.738 235 112.938C235 112.738 234.9 112.438 234.9 112.238C234.9 112.238 234.9 112.238 235 112.238Z" :fill="color"/>
  <path d="M135 147.738C142.9 148.738 150.4 147.338 157.8 145.238C159.8 144.638 161.8 143.738 163.7 142.738C165.6 141.738 166.5 140.038 166.5 137.838C166.5 136.738 166.5 135.638 166.6 134.438C166.8 131.938 167.9 131.038 170.4 131.238C173.4 131.438 175.8 133.838 176.1 137.238C176.3 139.338 175.9 141.438 174.7 143.138C173.2 145.238 171.7 147.338 169.8 149.038C165 153.438 159.7 157.038 154 160.138C150.7 161.938 147.2 163.238 143.4 163.638C137.8 164.238 132.4 161.638 129.7 156.838C129.3 156.238 129 155.538 128.8 154.838C127.6 150.638 130.3 147.638 135 147.738Z" :fill="color"/>
  <path d="M121.9 141.938C117.6 142.237 113.1 138.838 113.2 133.238C113.2 127.938 116.7 124.438 122.1 124.438C127.1 124.438 130.5 127.937 130.6 133.137C130.5 138.337 127 141.938 121.9 141.938Z" :fill="color"/>
  <path d="M150.8 126.038C147.8 126.038 145.6 123.938 145.6 120.938C145.6 117.938 147.7 115.838 150.7 115.838C153.7 115.838 155.9 117.938 155.9 120.938C155.9 123.838 153.7 126.038 150.8 126.038Z" :fill="color"/>
  <path d="M270.7 155.438C271.5 155.438 272.4 155.438 273.2 155.438C273.2 155.538 273.2 155.537 273.2 155.637C272.3 155.637 271.5 155.637 270.6 155.637C270.6 155.637 270.6 155.538 270.7 155.438Z" :fill="color"/>
  </svg>
  `
}