const { query } = require("../functions/db")

const CreateDocument = async (nom, prenom, fn_pere, ln_pere, fn_mere, ln_mere, sexe, date_naissance,
       lieu_naissance, province, commune, colline, acte_numero, acte_date, acte_lieu,
       nationalite_actuelle, situation_matrimoniale, adresse_email, telephone, profession, datecreation, paie,
       qrcode_path, confirm_paye, residence_actuelle, reference, telephone_reference, language, tracking, statut_id,
       bureau_id, rdv_confirme, rdv_date, dossier_complet, as_paie, retrait_par,
       type_document_voyage_id, mbr_id, path_photo_passport,
       path_cni,
       path_autorisation_parentale, path_extrait_acte_de_naissance, statut_telechargement_path, txn_id,
       rdv_id, date_paied, montant, mode_id, date_telechargement_certificat_demande, invoice_id, NHT, motif,
       choix_notif, is_recu_certicifat) => {
       try {
              var sqlQuery = "INSERT INTO  doc_document_json(nom, prenom, fn_pere, ln_pere, fn_mere, ln_mere, sexe, date_naissance,lieu_naissance, province, commune, colline, acte_numero, acte_date, acte_lieu,nationalite_actuelle, situation_matrimoniale, adresse_email, telephone, profession, datecreation, paie, qrcode_path, confirm_paye, residence_actuelle, reference, telephone_reference, language, tracking, statut_id, bureau_id, rdv_confirme, rdv_date, dossier_complet, as_paie, retrait_par, type_document_voyage_id, mbr_id, path_photo_passport, path_cni, path_autorisation_parentale, path_extrait_acte_de_naissance, statut_telechargement_path, txn_id, rdv_id, date_paied, montant, mode_id, date_telechargement_certificat_demande, invoice_id, NHT, motif,choix_notif, is_recu_certicifat)";
              sqlQuery += "VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
              return query(sqlQuery, [
                     nom, prenom, fn_pere, ln_pere, fn_mere, ln_mere, sexe, date_naissance,
                     lieu_naissance, province, commune, colline, acte_numero, acte_date, acte_lieu,
                     nationalite_actuelle, situation_matrimoniale, adresse_email, telephone, profession, datecreation, paie,
                     qrcode_path, confirm_paye, residence_actuelle, reference, telephone_reference, language, tracking, statut_id,
                     bureau_id, rdv_confirme, rdv_date, dossier_complet, as_paie, retrait_par,
                     type_document_voyage_id, mbr_id, path_photo_passport,
                     path_cni,
                     path_autorisation_parentale, path_extrait_acte_de_naissance, statut_telechargement_path, txn_id,
                     rdv_id, date_paied, montant, mode_id, date_telechargement_certificat_demande, invoice_id, NHT, motif,
                     choix_notif, is_recu_certicifat

              ]);
       } catch (error) {
              throw error
       }

}


module.exports = {
       CreateDocument
}