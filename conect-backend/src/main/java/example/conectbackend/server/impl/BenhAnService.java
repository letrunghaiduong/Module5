package example.conectbackend.server.impl;

import example.conectbackend.model.BenhAn;
import example.conectbackend.repository.IBenhAnRepository;
import example.conectbackend.server.IBenhAnService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BenhAnService implements IBenhAnService {
    @Autowired
    private IBenhAnRepository benhAnRepository;

    @Override
    public List<BenhAn> danhSach() {
        return benhAnRepository.danhSach();
    }

    @Override
    public void xoaBenhAn(Integer id) {
        benhAnRepository.xoaBenhAn(id);
    }

    @Override
    public void themMoi(String maBenhAn, String maBenhNhan, String tenBenhNhan, String ngayNhapVien, String ngayRaVien, String lyDoNhapVien, String phuongPhapDieuTri, String bacSiDieuTri) {
        benhAnRepository.themMoi(maBenhAn, maBenhNhan, tenBenhNhan, ngayNhapVien, ngayRaVien, lyDoNhapVien, phuongPhapDieuTri, bacSiDieuTri);
    }

    @Override
    public BenhAn timBenhAn(Integer id) {
        return timBenhAn(id);
    }

    @Override
    public void suaBenhAn(String tenBenhNhan, String ngayNhapVien, String ngayRaVien, String lyDoNhapVien, String phuongPhapDieuTri, String bacSiDieuTri, Integer id) {
        benhAnRepository.suaBenhAn(tenBenhNhan, ngayNhapVien, ngayRaVien, lyDoNhapVien, phuongPhapDieuTri, bacSiDieuTri, id);
    }

}
