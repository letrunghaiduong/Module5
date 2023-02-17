package example.conectbackend.repository;

import example.conectbackend.model.BenhAn;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface IBenhAnRepository extends JpaRepository<BenhAn,Integer> {
    @Query(value = "select * from benh_an", nativeQuery = true)
    List<BenhAn> danhSach();


    @Query(value = "select * from benh_an as b where  and b.id =:id" ,nativeQuery = true)
    BenhAn timBenhAn(@Param("id") Integer  id);


    @Transactional
    @Modifying
    @Query(value = "delete from benh_an as b where b.id =:id", nativeQuery = true)
    void xoaBenhAn(@Param("id") Integer  id);

    @Modifying
    @Transactional
    @Query(value = "insert into benh_an(ma_benh_an, ma_benh_nhan, ten_benh_nhan, ngay_nhap_vien, ngay_ra_vien, ly_do_nhap_vien,phuong_phap_dieu_tri,bac_si_dieu_tri)" +
            " value(:maBenhAn, :maBenhNhan, :tenBenhNhan, :ngayNhapVien, :ngayRaVien, :lyDoNhapVien, :phuongPhapDieuTri,:bacSiDieuTri)", nativeQuery = true)
    void themMoi(@Param("maBenhAn") String maBenhAn, @Param("maBenhNhan") String maBenhNhan, @Param("tenBenhNhan") String tenBenhNhan,
                 @Param("ngayNhapVien") String ngayNhapVien, @Param("ngayRaVien") String ngayRaVien, @Param("lyDoNhapVien") String lyDoNhapVien,
                 @Param("phuongPhapDieuTri") String phuongPhapDieuTri, @Param("bacSiDieuTri") String bacSiDieuTri);

    @Modifying
    @Transactional
    @Query(value = "update benh_an set ten_benh_nhan = :tenBenhNhan, ngay_nhap_vien = :ngayNhapVien, ngay_ra_vien = :ngayRaVien, ly_do_nhap_vien = :lyDoNhapVien, phuong_phap_dieu_tri = :phuongPhapDieuTri, bac_si_dieu_tri = :bacSiDieuTri where id = :id",
            nativeQuery = true)
    void suaBenhAn(@Param("tenBenhNhan") String tenBenhNhan, @Param("ngayNhapVien") String ngayNhapVien, @Param("ngayRaVien") String ngayRaVien,
                             @Param("lyDoNhapVien") String lyDoNhapVien, @Param("phuongPhapDieuTri") String phuongPhapDieuTri, @Param("bacSiDieuTri") String bacSiDieuTri, @Param("id") Integer id);
}
