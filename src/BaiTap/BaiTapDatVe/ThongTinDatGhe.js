import React, { Component } from 'react'
import { connect } from "react-redux"
import { huyGheAction } from '../../redux/actions/BaiTapDatVeActions'


class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div className='text-light'>
          <div >
            <button className='mt-2 gheDuocChon mr-2'></button> <span>Ghế đã đặt</span>
          </div>
          <div>
            <button className='mt-2 gheDangChon mr-2'></button> <span>Ghế đang chọn</span>
          </div>
          <div>
            <button className='mt-2 ghe ml-0 mr-2'></button> <span>Ghế còn trống</span>
          </div>
        </div>

        <div>
          <table class="table mt-3" border="2">
            <thead>
              <tr className='text-light'>
                <th>Số ghế</th>
                <th>Giá</th>
                <th className='text-danger'>Hủy</th>
              </tr>
            </thead>
            <tbody className='text-warning'>
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return <tr key={index}>
                  <td>{gheDangDat.soGhe}</td>
                  <td>{gheDangDat.gia.toLocaleString()}</td>
                  <td><button onClick={() => {
                    this.props.dispatch(
                      huyGheAction(gheDangDat.soGhe)
                    )
                  }}>Hủy</button></td>
                </tr>
              })}
            </tbody>
            <tfoot className='text-warning'>
              <tr>
                <td></td>
                <td>Tổng tiền</td>
                <td >{this.props.danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
                  return tongTien += gheDangDat.gia
                }, 0).toLocaleString()}</td>
              </tr>
            </tfoot>
          </table>
        </div>


      </div>

    )
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    danhSachGheDangDat: rootReducer.baiTapDatVeReducer.danhSachGheDangDat
  }
}


export default connect(mapStateToProps)(ThongTinDatGhe)