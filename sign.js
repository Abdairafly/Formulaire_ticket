  // Initialisation des blocs de signature
  var signaturePadClient = new SignaturePad(document.getElementById('signatureClientCanvas'));
  var signaturePadTechnicien = new SignaturePad(document.getElementById('signatureTechnicienCanvas'));

  // Fonction pour effacer la signature du client
  document.getElementById('clearSignatureClient').addEventListener('click', function () {
    signaturePadClient.clear();
  });

  // Fonction pour effacer la signature du technicien
  document.getElementById('clearSignatureTechnicien').addEventListener('click', function () {
    signaturePadTechnicien.clear();
  });