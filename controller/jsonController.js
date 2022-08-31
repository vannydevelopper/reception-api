const jsonModel = require("../model/jsonModel")
const Validation = require("../class/Validation")

const createDocument = async (req, res) => {
       try {
              const {data} = req.body
              console.log(data)
              const validation = new Validation(req.body)
              validation.run()
              if (validation.isValidate()) {
                     const { insertId } = await jsonModel.CreateDocument(
                            data.nom, data.prenom, data.fn_pere, data.ln_pere, data.fn_mere,  data.ln_mere, data.sexe, data.date_naissance,
                            data.lieu_naissance, data.province, data.commune, data.colline, data.acte_numero,
                            data.acte_date, data.acte_lieu, data.nationalite_actuelle, data.situation_matrimoniale, data.adresse_email,
                            data.telephone, data.profession, data.datecreation, data.paie, data.qrcode_path, data.confirm_paye, 
                            data.residence_actuelle,
                            data.reference, data.telephone_reference,data.language,data.tracking, data.statut_id, data.bureau_id,
                             data.rdv_confirme, data.rdv_date,
                            data.dossier_complet, data.as_paie, data.retrait_par, data.type_document_voyage_id, data.mbr_id,
                            data.path_photo_passport,data.path_cni,
                            data.path_autorisation_parentale, data.path_extrait_acte_de_naissance, data.statut_telechargement_path,
                            data.txn_id, data.rdv_id, data.date_paied, data.montant, data.mode_id, data.date_telechargement_certificat_demande,
                            data.invoice_id,data.NHT, data.motif, data.choix_notif, data.is_recu_certicifat     
                     );
              }
       }

       catch (error) {
              console.log(error)
              res.status(500).send("server error")
       }
}


module.exports = {
       createDocument
}