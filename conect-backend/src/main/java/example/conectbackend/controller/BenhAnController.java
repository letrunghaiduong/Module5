package example.conectbackend.controller;

import example.conectbackend.model.BenhAn;
import example.conectbackend.server.IBenhAnService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class BenhAnController {
    @Autowired
    private IBenhAnService benhAnService;

    @GetMapping("")
    public ResponseEntity<List<BenhAn>> findAll() {
        List<BenhAn> benhAnList = benhAnService.danhSach();
        if (benhAnList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(benhAnList, HttpStatus.OK);
    }

    @DeleteMapping("/list/{id}")
    private ResponseEntity<?> delete(@PathVariable("id") Integer id) {
        try {
            benhAnService.xoaBenhAn(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/patient")
    private ResponseEntity<List<BenhAn>> listPatient() {
        List<BenhAn> benhAnList = benhAnService.danhSach();
        if (benhAnList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(benhAnList, HttpStatus.OK);
    }

    @PostMapping("")
    private ResponseEntity<?> add(@RequestBody BenhAn benhAn) {

        try {
            benhAnService.themMoi(benhAn.getMaBenhAn(), benhAn.getMaBenhNhan(),  benhAn.getTenBenhNhan(), benhAn.getNgayNhapVien(), benhAn.getNgayRaVien(), benhAn.getLyDoNhapVien(), benhAn.getPhuongPhapDieuTri(), benhAn.getBacSiDieuTri());
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/detail/{id}")
    private ResponseEntity<BenhAn> detail(@PathVariable("id") Integer id) {
        BenhAn medicalRecord = benhAnService.timBenhAn(id);
        return new ResponseEntity<>(medicalRecord, HttpStatus.OK);
    }

    @PutMapping("/update")
    private ResponseEntity<?> update(@RequestBody BenhAn benhAn) {
        benhAnService.suaBenhAn(benhAn.getTenBenhNhan(), benhAn.getNgayNhapVien(), benhAn.getNgayRaVien(), benhAn.getLyDoNhapVien(), benhAn.getPhuongPhapDieuTri(), benhAn.getBacSiDieuTri(), benhAn.getId());
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
