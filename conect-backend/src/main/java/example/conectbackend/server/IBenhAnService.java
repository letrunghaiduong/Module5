package example.conectbackend.server;

import example.conectbackend.model.BenhAn;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IBenhAnService {
    List<BenhAn> danhSach();

    void xoaBenhAn(Integer id);


    void themMoi(String maBenhAn, String maBenhNhan, String tenBenhNhan, String ngayNhapVien, String ngayRaVien, String lyDoNhapVien, String phuongPhapDieuTri, String bacSiDieuTri);

    BenhAn timBenhAn(Integer id);

    void suaBenhAn(String tenBenhNhan, String ngayNhapVien, String ngayRaVien, String lyDoNhapVien, String phuongPhapDieuTri, String bacSiDieuTri, Integer id);
}
