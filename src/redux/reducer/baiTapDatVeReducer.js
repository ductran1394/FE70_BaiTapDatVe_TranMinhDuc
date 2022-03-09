import { DAT_GHE, HUY_GHE } from "../type/BaiTapDatVeType";

const stateDefault = {
  danhSachGheDangDat: [
    // { soGhe: "B1", gia: 1000 }
  ]
}

export const baiTapDatVeReducer = (state = stateDefault, action) => {

  switch (action.type) {
    case DAT_GHE: {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat] //Chép dữ liệu mảng stateDefault qua ô nhớ mới

      let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe);
      if (index !== -1) {
        danhSachGheDangDatUpdate.splice(index, 1)
      } else {
        danhSachGheDangDatUpdate.push(action.ghe)
      }

      state.danhSachGheDangDat = danhSachGheDangDatUpdate;

      return { ...state }
    }

    case HUY_GHE: {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat]

      let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.soGhe);

      if (index !== -1) {
        danhSachGheDangDatUpdate.splice(index, 1)
      }

      state.danhSachGheDangDat = danhSachGheDangDatUpdate;
      return { ...state }
    }
    default: return { ...state }
  }
}

