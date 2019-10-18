'use strict';

module.exports = function(app) {
    
    const users = require('./controller/users');
    const auth = require('./controller/auth');
    
    app.route('/login')
        .post(auth.login)

    app.route('/me')
        .get(auth.me);    

    app.route('/')
        .get(users.index);

    app.route('/users')
        .get(users.users);

    app.route('/profile')
        .get(users.findProfile);

    app.route('/user/password')
        .put(users.updatePassword);

    app.route('/bkduser')
        .get(users.bkdUser);

    app.route('/users/:user_id')
        .get(users.findUsers);

    app.route('/users')
        .post(users.createUsers);
    
        app.route('/bkduser')
        .post(users.createBkduser);

        app.route('/memberuser')
        .post(users.createMemberuser);

    app.route('/users')
        .put(users.updateUsers);

    app.route('/users')
        .delete(users.deleteUsers);

    const bkd = require('./controller/bkd');
    
    app.route('/bkd')
        .get(bkd.listBkd);

    app.route('/bkd/:bkd_id')
        .get(bkd.findBkd);

    app.route('/bkd')
        .post(bkd.createBkd);

    app.route('/bkd')
        .put(bkd.updateBkd);

    app.route('/bkd/:bkdId')
        .delete(bkd.deleteBkd);

    const skpd = require('./controller/skpd');

    
        
        app.route('/skpd')
            .get(skpd.listSkpd);

        app.route('/skpd/bkd/:bkdid')
            .get(skpd.listSkpdbkd);
    
        app.route('/skpd/:skpd_id')
            .get(skpd.findSkpd);
    
        app.route('/skpd')
            .post(skpd.createSkpd);
    
        app.route('/skpd')
            .put(skpd.updateSkpd);
    
        app.route('/skpd/:skpdId')
            .delete(skpd.deleteSkpd);

    
    const jenisdiklat = require('./controller/jenisdiklat');

            app.route('/jenisdiklat')
                .get(jenisdiklat.listJenis);
        
            app.route('/jenisdiklat/:jenisId')
                .get(jenisdiklat.findJenis);
        
            app.route('/jenisdiklat')
                .post(jenisdiklat.createJenis);
        
            app.route('/jenisdiklat')
                .put(jenisdiklat.updateJenis);
        
            app.route('/jenisdiklat/:jenisId')
                .delete(jenisdiklat.deleteJenis);

    const tempatdiklat = require('./controller/tempat');

            app.route('/tempat')
                    .get(tempatdiklat.listTempat);
            
            app.route('/tempat/:tempatId')
                    .get(tempatdiklat.findTempat);
            
            app.route('/tempat')
                    .post(tempatdiklat.createTempat);
            
            app.route('/tempat')
                    .put(tempatdiklat.updateTempat);
            
            app.route('/tempat/:tempatId')
                    .delete(tempatdiklat.deleteTempat);
    
    
    const kampus = require('./controller/kampus');

            app.route('/kampus')
                    .get(kampus.listKampus);
            app.route('/vkampus')
                    .get(kampus.listVKampus);
            
            app.route('/kampus/ruangan/:kampusId')
                    .get(kampus.listRuanganKampus);

            app.route('/vruangan/:ruanganId')
                    .get(kampus.findVKampus);
                    
            app.route('/kampus/:kampusId')
                    .get(kampus.findKampus);
                    
            app.route('/kampus')
                    .post(kampus.createKampus);

            app.route('/ruangan')
                    .post(kampus.createRuangan);
                    
            app.route('/kampus')
                    .put(kampus.updateKampus);

             app.route('/ruangan')
                    .put(kampus.updateRuangan);
                    
            app.route('/kampus/:kampusId')
                    .delete(kampus.deleteKampus);
            app.route('/ruangan/:ruanganId')
                    .delete(kampus.deleteRuangan);

            
    const widyaiswara = require('./controller/widyaiswara');

        app.route('/widyaiswara')
            .get(widyaiswara.listWidyaiswara);
                    
        app.route('/widyaiswara/:widyaiswaraId')
            .get(widyaiswara.findWidyaiswara);
                    
        app.route('/widyaiswara')
            .post(widyaiswara.createWidyaiswara);
                    
        app.route('/widyaiswara')
            .put(widyaiswara.updateWidyaiswara);
                    
        app.route('/widyaiswara/:widyaiswaraId')
            .delete(widyaiswara.deleteWidyaiswara);


    const kegiatan = require('./controller/kegiatan');

        app.route('/kegiatan')
                .get(kegiatan.listKegiatan);
                        
        app.route('/kegiatan/:kegiatanId')
                .get(kegiatan.findKegiatan);
                        
        app.route('/kegiatan')
                .post(kegiatan.createKegiatan);
                        
        app.route('/kegiatan')
                .put(kegiatan.updateKegiatan);
                        
        app.route('/kegiatan')
                .delete(kegiatan.deleteKegiatan);

    
    const detailkegiatan = require('./controller/detailkegiatan');

                app.route('/detailkegiatan')
                        .get(detailkegiatan.listDetailkegiatan);
                                
                app.route('/detailkegiatan/:detailkegiatanId')
                        .get(detailkegiatan.findDetailkegiatan);
                                
                app.route('/detailkegiatan')
                        .post(detailkegiatan.createDetailkegiatan);
                                
                app.route('/detailkegiatan')
                        .put(detailkegiatan.updateDetailkegiatan);
                                
                app.route('/detailkegiatan')
                        .delete(detailkegiatan.deleteDetailkegiatan);

    
   const pengajuan = require('./controller/pengajuan');

                app.route('/livepengajuan')
                        .get(pengajuan.livePengajuan);

                app.route('/pengajuan')
                        .get(pengajuan.listPengajuan);

                app.route('/pengajuan/bkd/:bkdId')
                        .get(pengajuan.listPengajuanbkd);

                app.route('/pengajuan/approvekabupaten/:bkdId')
                        .get(pengajuan.findApprovekabupaten);
                        
                app.route('/pengajuan/approve')
                        .get(pengajuan.listApprove);

                app.route('/pengajuan/approvekabupaten')
                        .get(pengajuan.listApprovekabupaten);
                
                 app.route('/pengajuan/count')
                        .get(pengajuan.countPengajuan);

                
                app.route('/pengajuan/reject')
                        .post(pengajuan.createReject);
                
                app.route('/pengajuan/reject')
                        .put(pengajuan.setReject);
                
                
                app.route('/pengajuan/approve/:pengajuanId')
                        .get(pengajuan.findApprove);

                app.route('/pengajuan/approve/bkd/:bkdId')
                        .get(pengajuan.listApprovebkd);

                app.route('/pengajuan/approve/bkd/:bkdId/:pengajuanId')
                        .get(pengajuan.findApprovebkd);
                
                app.route('/pengajuan/approve/:pengajuanId')
                        .get(pengajuan.findApprove);


                                
                app.route('/pengajuan/:pengajuanId')
                        .get(pengajuan.findPengajuan);

                app.route('/pengajuan')
                        .put(pengajuan.setApprove);
                
                app.route('/pengajuan')
                        .post(pengajuan.createPengajuan);

               
     const kabupaten = require('./controller/kabupaten');

                        app.route('/kabupaten')
                                .get(kabupaten.listKabupaten);

    const peserta = require('./controller/peserta');

        app.route('/peserta')
                .get(peserta.listPeserta);
        app.route('/peserta/:pengajuanId')
                .get(peserta.listPesertapengajuan);
        app.route('/peserta/bkd/:bkdId')
                .get(peserta.listPesertabkd);

    const detailpengajuan = require('./controller/detailpengajuan');

                                app.route('/detailpengajuan')
                                        .get(detailpengajuan.listDetailpengajuan);
                                                        
                                app.route('/detailpengajuan/:pengajuanId')
                                        .get(detailpengajuan.findDetailpengajuan);
                                
                                app.route('/detailpengajuan')
                                        .post(detailpengajuan.createDetailpengajuan);

    const kritik = require('./controller/kritik');

         app.route('/kritik')
                .get(kritik.listKritik);

        app.route('/kritik/bkd/:bkdId')
                .get(kritik.lisKritikbkd);

        app.route('/kritik')
                .post(kritik.createKritik);
                                
   const uploads = require('./controller/upload');
   
   app.route('/upload')
   .post(uploads.FileUpload);

   app.route('/upload/reject')
   .post(uploads.FileReject);

   app.route('/upload/bkd')
   .post(uploads.FileUploadbkd);

   const rundown = require('./controller/rundown');

         app.route('/rundown')
                .get(rundown.listRundown);

        app.route('/rundown/:pengajuanId')
                .get(rundown.findRundown);

        app.route('/rundown')
                .post(rundown.createRundown);
    
};

                        
                
    

