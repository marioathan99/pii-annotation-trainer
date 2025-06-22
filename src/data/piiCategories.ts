import { PIICategory, PIIType, PIITopic } from '../types';

/**
 * Κατηγορίες PII με λεπτομερείς πληροφορίες για κάθε τύπο
 * Βασισμένες στις οδηγίες Fractal Phase 3 - Text Annotation Guidelines
 */
export const piiCategories: PIICategory[] = [
  // ============ ΕΠΙΚΟΙΝΩΝΙΑ ============
  {
    id: 'fullName',
    name: 'Πλήρες Όνομα',
    nameEn: 'Full Name',
    topic: 'contact',
    type: 'direct',
    description: 'Όνομα και επώνυμο μαζί, τουλάχιστον. Περιλαμβάνει τίτλους, μεσαία ονόματα και επιθήματα',
    examples: ['Καθηγητής John Smith', 'Διευθύνων Σύμβουλος Elon Musk', 'Πρωθυπουργός Narendra Modi'],
    annotationRule: 'Να περιλαμβάνονται τίτλοι, τιμητικές λέξεις, και επιθήματα',
    whenToTag: 'always'
  },
  {
    id: 'familyName',
    name: 'Επώνυμο',
    nameEn: 'Family Name',
    topic: 'contact',
    type: 'strongIndirect',
    description: 'Επώνυμο, ονόματα γάμου, πρώην ονόματα',
    examples: ['Smith', 'Παπαδόπουλος'],
    annotationRule: 'Να περιλαμβάνεται μόνο το επώνυμο',
    whenToTag: 'always'
  },
  {
    id: 'firstName',
    name: 'Όνομα',
    nameEn: 'First Name',
    topic: 'contact',
    type: 'strongIndirect',
    description: 'Το πρώτο όνομα ενός ατόμου',
    examples: ['Γιώργος', 'John'],
    annotationRule: 'Να περιλαμβάνεται μόνο το όνομα',
    whenToTag: 'always'
  },
  {
    id: 'middleName',
    name: 'Μεσαίο Όνομα',
    nameEn: 'Middle Name',
    topic: 'contact',
    type: 'strongIndirect',
    description: 'Δεύτερο όνομα',
    examples: ['Alexander', 'Maria'],
    annotationRule: 'Να περιλαμβάνεται μόνο το μεσαίο όνομα',
    whenToTag: 'always'
  },
  {
    id: 'nickname',
    name: 'Παρατσούκλι',
    nameEn: 'Nickname',
    topic: 'contact',
    type: 'strongIndirect',
    description: 'Όνομα διαφορετικό από το νόμιμο όνομα',
    examples: ['Μάκης', 'Betty'],
    annotationRule: 'Να περιλαμβάνεται μόνο το παρατσούκλι',
    whenToTag: 'always'
  },
  {
    id: 'namePartial',
    name: 'Μερικό Όνομα',
    nameEn: 'Partial Name',
    topic: 'contact',
    type: 'strongIndirect',
    description: 'Γενική κατηγορία για μορφές μερικών ονομάτων με τίτλους',
    examples: ['Mr. Smith', 'Pastor Ryan', 'CEO John', 'Anita, PhD'],
    annotationRule: 'Όλες οι άλλες κατηγορίες ονομάτων εκτός από τα πλήρη',
    whenToTag: 'always'
  },
  {
    id: 'emailNonPersonal',
    name: 'Email (Μη-Προσωπικό)',
    nameEn: 'Email (Non-Personal)',
    topic: 'contact',
    type: 'direct',
    description: 'Διεύθυνση ηλεκτρονικού ταχυδρομείου επιχειρηματική',
    examples: ['support@company.com', 'info@organization.gr'],
    annotationRule: 'Ολόκληρη η διεύθυνση email',
    whenToTag: 'always'
  },
  {
    id: 'emailPersonal',
    name: 'Email (Προσωπικό)',
    nameEn: 'Email (Personal)',
    topic: 'contact',
    type: 'direct',
    description: 'Διεύθυνση ηλεκτρονικού ταχυδρομείου προσωπική',
    examples: ['maria1990@gmail.com', 'john.doe@yahoo.com'],
    annotationRule: 'Ολόκληρη η διεύθυνση email',
    whenToTag: 'always'
  },
  {
    id: 'emailNonPersonal',
    name: 'Μη-Προσωπικό Email',
    nameEn: 'Email (Non-Personal)',
    topic: 'contact',
    type: 'direct',
    description: 'Διεύθυνση ηλεκτρονικού ταχυδρομείου που χρησιμοποιείται για επαγγελματική ή οργανωτική επικοινωνία',
    examples: ['info@company.com', 'support@organization.org'],
    annotationRule: 'Να περιλαμβάνεται ολόκληρη η διεύθυνση email, χωρίς συμφραζόμενα',
    whenToTag: 'always'
  },
  {
    id: 'phonePersonal',
    name: 'Τηλέφωνο (Προσωπικό)',
    nameEn: 'Phone (Personal)',
    topic: 'contact',
    type: 'strongIndirect',
    description: 'Οποιοσδήποτε αριθμός τηλεφώνου που δεν είναι ρητά γραμμή κινητής τηλεφωνίας',
    examples: ['+30 210 1234567', '210-1234567'],
    annotationRule: 'Να περιλαμβάνεται ο κωδικός χώρας/περιοχής',
    whenToTag: 'always'
  },
  {
    id: 'phoneNonPersonal',
    name: 'Τηλέφωνο (Μη-Προσωπικό)',
    nameEn: 'Phone (Non-Personal)',
    topic: 'contact',
    type: 'strongIndirect',
    description: 'Επιχειρηματικός αριθμός τηλεφώνου',
    examples: ['+30 210 9876543', '800-COMPANY'],
    annotationRule: 'Να περιλαμβάνεται ο κωδικός χώρας/περιοχής',
    whenToTag: 'always'
  },
  {
    id: 'phoneMobilePersonal',
    name: 'Κινητό Τηλέφωνο (Προσωπικό)',
    nameEn: 'Mobile Phone (Personal)',
    topic: 'contact',
    type: 'direct',
    description: 'Αριθμός τηλεφώνου για κινητό τηλέφωνο προσωπικό',
    examples: ['+30 6912345678', '697-1234567'],
    annotationRule: 'Να περιλαμβάνεται ο κωδικός χώρας',
    whenToTag: 'always'
  },
  {
    id: 'phoneMobileNonPersonal',
    name: 'Κινητό Τηλέφωνο (Μη-Προσωπικό)',
    nameEn: 'Mobile Phone (Non-Personal)',
    topic: 'contact',
    type: 'direct',
    description: 'Αριθμός τηλεφώνου για κινητό τηλέφωνο επιχειρηματικό',
    examples: ['+30 6901234567', '698-7654321'],
    annotationRule: 'Να περιλαμβάνεται ο κωδικός χώρας',
    whenToTag: 'always'
  },
  {
    id: 'gpsLocation',
    name: 'GPS Τοποθεσία',
    nameEn: 'GPS Location',
    topic: 'contact',
    type: 'direct',
    description: 'Συντεταγμένες που προσδιορίζουν τη γεωγραφική θέση ενός ατόμου ή αντικειμένου',
    examples: ['37.9755°N, 23.7348°E', 'https://maps.google.com/...'],
    annotationRule: 'Γεωγραφικό πλάτος και μήκος ή σύνδεσμοι χαρτών',
    whenToTag: 'always'
  },
  {
    id: 'addressPersonal',
    name: 'Διεύθυνση (Προσωπική)',
    nameEn: 'Address (Personal)',
    topic: 'contact',
    type: 'direct',
    description: 'Διεύθυνση που χρησιμοποιείται για να δώσει τη θέση ενός κτιρίου προσωπικού',
    examples: ['Πατησίων 76, Αθήνα 10434', '123 Main St, Athens'],
    annotationRule: 'Ολόκληρη η διεύθυνση συμπεριλαμβανομένου ταχ. κώδικα',
    whenToTag: 'always'
  },
  {
    id: 'addressNonPersonal',
    name: 'Διεύθυνση (Μη-Προσωπική)',
    nameEn: 'Address (Non-Personal)',
    topic: 'contact',
    type: 'direct',
    description: 'Διεύθυνση επιχειρηματική ή οργανισμού',
    examples: ['Πανεπιστημίου 34, Αθήνα', 'Company HQ, Business District'],
    annotationRule: 'Ολόκληρη η διεύθυνση',
    whenToTag: 'always'
  },
  {
    id: 'impreciseLocation',
    name: 'Ανακριβής Τοποθεσία',
    nameEn: 'Imprecise Location',
    topic: 'contact',
    type: 'strongIndirect',
    description: 'Ανακριβείς δηλώσεις που αποκαλύπτουν γενική τοποθεσία',
    examples: ['Είμαι στο Παρίσι', 'Έφυγε για Φλωρίνα'],
    annotationRule: 'Μόνο το όνομα της τοποθεσίας, όχι επωνυμίες χωρίς εξειδίκευση',
    whenToTag: 'depends'
  },

  // ============ ΚΡΑΤΙΚΑ ΑΝΑΓΝΩΡΙΣΤΙΚΑ ============
  {
    id: 'driversLicenseNumber',
    name: 'Αριθμός Άδειας Οδήγησης',
    nameEn: 'Drivers License Number',
    topic: 'governmentId',
    type: 'direct',
    description: 'Μορφή ταυτότητας που παρέχει τα δικαιώματα οδήγησης ενός ατόμου',
    examples: ['ΑΧ1234567', 'DL123456789'],
    annotationRule: 'Ολόκληρος ο αριθμός άδειας',
    whenToTag: 'always'
  },
  {
    id: 'passportNumber',
    name: 'Αριθμός Διαβατηρίου',
    nameEn: 'Passport Number',
    topic: 'governmentId',
    type: 'direct',
    description: 'Επίσημο έγγραφο που εκδίδεται από κυβέρνηση για ταξίδια',
    examples: ['AΕ1234567', 'P123456789'],
    annotationRule: 'Ολόκληρος ο αριθμός διαβατηρίου',
    whenToTag: 'always'
  },
  {
    id: 'socialSecurityNumber',
    name: 'ΑΜΚΑ',
    nameEn: 'Social Security Number',
    topic: 'governmentId',
    type: 'direct',
    description: 'Το λεγόμενο ΑΜΚΑ στην Ελλάδα',
    examples: ['12345678901', '987-65-4321'],
    annotationRule: 'Ολόκληρος ο αριθμός',
    whenToTag: 'always'
  },
  {
    id: 'governmentIdentification',
    name: 'Κυβερνητική Ταυτότητα',
    nameEn: 'Government Identification',
    topic: 'governmentId',
    type: 'direct',
    description: 'Άδειες επιχειρήσεων, κωδικοί IFSC τράπεζας, και άλλα κυβερνητικά ID',
    examples: ['GST123456', 'IFSC001234'],
    annotationRule: 'Ολόκληρο το αναγνωριστικό',
    whenToTag: 'always'
  },

  // ============ ΗΛΙΚΙΑ ============
  {
    id: 'dateOfBirth',
    name: 'Ημερομηνία Γέννησης',
    nameEn: 'Date of Birth',
    topic: 'age',
    type: 'strongIndirect',
    description: 'Έτος, μήνας, ημέρα γέννησης ενός ατόμου',
    examples: ['15 Μαΐου 1990', '1990-05-15', 'Γεννήθηκα το 1990'],
    annotationRule: 'Ολόκληρη η ημερομηνία ή τμήματά της',
    whenToTag: 'always'
  },
  {
    id: 'numericAge',
    name: 'Αριθμητική Ηλικία',
    nameEn: 'Numeric Age',
    topic: 'age',
    type: 'strongIndirect',
    description: 'Ακριβής ή κατά προσέγγιση αριθμητική ηλικία ενός ατόμου',
    examples: ['31 ετών', 'γίνεται 3!!!', 'είμαι 25'],
    annotationRule: 'Μόνο ο αριθμός, όχι η λέξη "ετών"',
    whenToTag: 'always'
  },
  {
    id: 'ageBracket',
    name: 'Ηλικιακό Εύρος',
    nameEn: 'Age Bracket',
    topic: 'age',
    type: 'strongIndirect',
    description: 'Κατηγορία ηλικίας με καθορισμένα ανώτερα και κατώτερα όρια',
    examples: ['18-25', 'παιδιά ηλικίας 13-17 ετών'],
    annotationRule: 'Ολόκληρο το εύρος',
    whenToTag: 'always'
  },
  {
    id: 'lifeStage',
    name: 'Στάδιο Ζωής',
    nameEn: 'Life Stage',
    topic: 'age',
    type: 'strongIndirect',
    description: 'Ρητή δήλωση της ηλικιακής ομάδας, της γενιάς ή άλλου σημαντικού σταδίου ζωής',
    examples: ['παιδί', 'έφηβος', 'Baby Boomer', 'συνταξιούχος'],
    annotationRule: 'Τη λέξη-κλειδί του σταδίου',
    whenToTag: 'always'
  },
  {
    id: 'age',
    name: 'Ηλικία',
    nameEn: 'Age',
    topic: 'age',
    type: 'strongIndirect',
    description: 'Γενική κατηγορία για δεδομένα σχετικά με την ηλικία',
    examples: ['νεαρός', 'ηλικιωμένος', 'μέσης ηλικίας'],
    annotationRule: 'Οτιδήποτε δεν καλύπτεται στις προηγούμενες κατηγορίες',
    whenToTag: 'depends'
  },

  // ============ ΟΙΚΟΝΟΜΙΚΑ ============
  {
    id: 'bankAccountNumber',
    name: 'Αριθμός Τραπεζικού Λογαριασμού',
    nameEn: 'Bank Account Number',
    topic: 'financial',
    type: 'direct',
    description: 'Μοναδικός αριθμός που συνδέεται με ατομικό τραπεζικό λογαριασμό',
    examples: ['123-456789-01', 'ACC1234567890'],
    annotationRule: 'Ολόκληρος ο αριθμός λογαριασμού',
    whenToTag: 'always'
  },
  {
    id: 'bankPaymentCardNumber',
    name: 'Αριθμός Τραπεζικής Κάρτας',
    nameEn: 'Bank Payment Card Number',
    topic: 'financial',
    type: 'direct',
    description: 'Μοναδικός αριθμός που συνδέεται με μια κάρτα πληρωμών',
    examples: ['4003448271155855', '5555-4444-3333-2222'],
    annotationRule: 'Ολόκληρος ο αριθμός κάρτας',
    whenToTag: 'always'
  },
  {
    id: 'cvc',
    name: 'CVC',
    nameEn: 'CVC',
    topic: 'financial',
    type: 'direct',
    description: 'Μοναδικός τριψήφιος ή τετραψήφιος κωδικός ασφαλείας κάρτας',
    examples: ['123', '4567'],
    annotationRule: 'Ολόκληρος ο κωδικός',
    whenToTag: 'always'
  },
  {
    id: 'cryptocurrencyIdentifier',
    name: 'Αναγνωριστικό Κρυπτονομίσματος',
    nameEn: 'Cryptocurrency Identifier',
    topic: 'financial',
    type: 'direct',
    description: 'Μοναδικά αναγνωριστικά κρυπτονομισμάτων και πορτοφολιών',
    examples: ['1A2B3C4D5E6F78901', 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh'],
    annotationRule: 'Ολόκληρο το αναγνωριστικό',
    whenToTag: 'always'
  },
  {
    id: 'ibanCode',
    name: 'Κωδικός IBAN',
    nameEn: 'IBAN Code',
    topic: 'financial',
    type: 'direct',
    description: 'Διεθνής αριθμός τραπεζικού λογαριασμού',
    examples: ['GR1601101250000000012300695', 'DE89370400440532013000'],
    annotationRule: 'Ολόκληρος ο κωδικός IBAN',
    whenToTag: 'always'
  },
  {
    id: 'individualTaxId',
    name: 'ΑΦΜ',
    nameEn: 'Individual Tax ID',
    topic: 'financial',
    type: 'direct',
    description: 'Ατομικά αναγνωρίσιμος αριθμός που εκδίδεται από την κυβέρνηση για οικονομικούς σκοπούς',
    examples: ['123456789', 'TAX987654321'],
    annotationRule: 'Ολόκληρος ο αριθμός φορολογικού μητρώου',
    whenToTag: 'always'
  },
  {
    id: 'financialAccountCredential',
    name: 'Διαπιστευτήρια Χρηματοοικονομικού Λογαριασμού',
    nameEn: 'Financial Account Credential',
    topic: 'financial',
    type: 'strongIndirect',
    description: 'Άλλα διαπιστευτήρια χρηματοοικονομικών λογαριασμών',
    examples: ['e-banking username', 'PayPal account', 'Revolut ID'],
    annotationRule: 'Ολόκληρο το διαπιστευτήριο',
    whenToTag: 'always'
  },
  {
    id: 'transactionData',
    name: 'Δεδομένα Συναλλαγής',
    nameEn: 'Transaction Data',
    topic: 'financial',
    type: 'weakIndirect',
    description: 'Αναγνωριστικό συναλλαγής, αναγνωριστικό παραγγελίας ηλεκτρονικού εμπορίου',
    examples: ['TXN123456789', 'ORDER-2024-001'],
    annotationRule: 'Ολόκληρο το αναγνωριστικό',
    whenToTag: 'always'
  },
  {
    id: 'financialStatus',
    name: 'Οικονομική Κατάσταση',
    nameEn: 'Financial Status',
    topic: 'financial',
    type: 'weakIndirect',
    description: 'Γενική κατηγορία για δεδομένα που υποδηλώνουν την οικονομική κατάσταση',
    examples: ['χαμηλό εισόδημα', 'πτώχευση', 'πιστωτική βαθμολογία 750'],
    annotationRule: 'Το συγκεκριμένο περιεχόμενο που υποδηλώνει οικονομική κατάσταση',
    whenToTag: 'depends'
  },

  // ============ ΠΡΟΪΟΝΤΑ & ΣΥΣΚΕΥΕΣ ============
  {
    id: 'metaProductIdentifiersPersonal',
    name: 'Meta Αναγνωριστικά Προϊόντων (Προσωπικά)',
    nameEn: 'Meta Product Identifiers (Personal)',
    topic: 'products',
    type: 'direct',
    description: 'Αναγνωριστικά που συνδέονται ρητά με τις μεταπλατφόρμες: Meta Transaction IDs, Meta ονόματα χρηστών προϊόντων (Instagram, Oculus, Workplace), Install IDs, Meta Product Cookies, αναγνωριστικά σελίδας/ομάδας/μηνυμάτων. ΕΞΑΙΡΟΥΝΤΑΙ: Facebook ονόματα (→ ονόματα), WhatsApp αριθμοί (→ τηλέφωνο κινητό)',
    examples: ['Instagram profile @user123', 'Meta OrderID #12345', 'Oculus username', 'Workplace employee ID', 'DATR cookie', 'Facebook Page ID', 'Thread ID', 'Message ID'],
    annotationRule: 'Μόνο το αναγνωριστικό, όχι links. Facebook ονόματα → κατηγορία ονομάτων, WhatsApp αριθμοί → τηλέφωνο κινητό',
    whenToTag: 'always'
  },
  {
    id: 'metaProductIdentifiersNonPersonal',
    name: 'Meta Αναγνωριστικά Προϊόντων (Μη-Προσωπικά)',
    nameEn: 'Meta Product Identifiers (Non-Personal)',
    topic: 'products',
    type: 'direct',
    description: 'Επιχειρηματικά αναγνωριστικά που συνδέονται ρητά με τις μεταπλατφόρμες: Meta Transaction IDs, επιχειρηματικά ονόματα χρηστών προϊόντων, ταυτότητες χώρου εργασίας, Install IDs, Meta Product Cookies, αναγνωριστικά σελίδας/ομάδας',
    examples: ['Meta business support@meta.com', 'Meta Business Page ID', 'Workplace Organization ID', 'Meta SubscriptionID', 'Business Install ID', 'TPID', 'Business DATR cookie'],
    annotationRule: 'Μόνο το αναγνωριστικό, όχι links',
    whenToTag: 'always'
  },
  {
    id: 'nonMetaCredentialsPersonal',
    name: 'Μη-Meta Διαπιστευτήρια (Προσωπικά)',
    nameEn: 'Non-Meta Credentials (Personal)',
    topic: 'products',
    type: 'direct',
    description: 'Ονόματα οθόνης, ονόματα χρηστών, κωδικοί πρόσβασης εξωτερικών πλατφορμών',
    examples: ['@username_twitter', 'youtube_channel_name', 'TikTok_handle'],
    annotationRule: 'Συμπεριλαμβάνονται τα @ και # σύμβολα',
    whenToTag: 'always'
  },
  {
    id: 'nonMetaCredentialsNonPersonal',
    name: 'Μη-Meta Διαπιστευτήρια (Μη-Προσωπικά)',
    nameEn: 'Non-Meta Credentials (Non-Personal)',
    topic: 'products',
    type: 'direct',
    description: 'Επιχειρηματικά ονόματα χρηστών και διαπιστευτήρια εξωτερικών πλατφορμών',
    examples: ['@company_twitter', 'business_youtube', 'corporate_linkedin'],
    annotationRule: 'Συμπεριλαμβάνονται τα @ και # σύμβολα',
    whenToTag: 'always'
  },
  {
    id: 'accessToken',
    name: 'Token Πρόσβασης',
    nameEn: 'Access Token',
    topic: 'products',
    type: 'direct',
    description: 'Ένα token πρόσβασης που περικλείει διαπιστευτήρια ασφαλείας',
    examples: ['eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...', 'ACCESS_TOKEN_123456'],
    annotationRule: 'Ολόκληρο το token',
    whenToTag: 'always'
  },
  {
    id: 'ipAddress',
    name: 'Διεύθυνση IP',
    nameEn: 'IP Address',
    topic: 'products',
    type: 'direct',
    description: 'Μια διεύθυνση πρωτοκόλλου Internet IPv4 ή IPv6',
    examples: ['192.168.1.1', '2001:0db8:85a3:0000:0000:8a2e:0370:7334'],
    annotationRule: 'Ολόκληρη η διεύθυνση IP',
    whenToTag: 'always'
  },
  {
    id: 'macAddress',
    name: 'Διεύθυνση MAC',
    nameEn: 'MAC Address',
    topic: 'products',
    type: 'direct',
    description: 'Η διεύθυνση ελέγχου πρόσβασης πολυμέσων ενός ελεγκτή διασύνδεσης δικτύου',
    examples: ['00:1B:44:11:3A:B7', '00-1B-44-11-3A-B7'],
    annotationRule: 'Ολόκληρη η διεύθυνση MAC',
    whenToTag: 'always'
  },
  {
    id: 'mobileEquipmentIdentity',
    name: 'IMEI',
    nameEn: 'Mobile Equipment Identity',
    topic: 'products',
    type: 'direct',
    description: 'Διεθνής Ταυτότητα Κινητού Εξοπλισμού για ταυτοποίηση κινητών τηλεφώνων',
    examples: ['490154203237518', '359496030101800'],
    annotationRule: 'Ολόκληρος ο αριθμός IMEI',
    whenToTag: 'always'
  },
  {
    id: 'mobilePhoneIdentificationNumber',
    name: 'MIN',
    nameEn: 'Mobile Phone Identification Number',
    topic: 'products',
    type: 'direct',
    description: 'Αριθμός αναγνώρισης κινητής τηλεφωνίας',
    examples: ['6195551234', '4155552345'],
    annotationRule: 'Ολόκληρος ο αριθμός MIN',
    whenToTag: 'always'
  },
  {
    id: 'uniqueDeviceIdentifier',
    name: 'UDID',
    nameEn: 'Unique Device Identifier',
    topic: 'products',
    type: 'direct',
    description: 'Συμβολοσειρά 24 χαρακτήρων που αποδίδεται σε όλες τις σύγχρονες συσκευές της Apple',
    examples: ['12345678-123456789ABCDEF0'],
    annotationRule: 'Ολόκληρο το UDID',
    whenToTag: 'always'
  },
  {
    id: 'iccid',
    name: 'ICCID',
    nameEn: 'ICCID',
    topic: 'products',
    type: 'weakIndirect',
    description: 'Αναγνώριση κάρτας ολοκληρωμένου κυκλώματος που ταυτοποιεί μια κάρτα SIM',
    examples: ['89302720171234567890', '8901260123456789012'],
    annotationRule: 'Ολόκληρος ο αριθμός ICCID',
    whenToTag: 'always'
  },

  // ============ ΟΧΗΜΑ ============
  {
    id: 'licensePlateNumber',
    name: 'Αριθμός Πινακίδας Κυκλοφορίας',
    nameEn: 'License Plate Number',
    topic: 'vehicle',
    type: 'direct',
    description: 'Αριθμός που βρίσκεται στην εξωτερική πινακίδα κυκλοφορίας ενός οχήματος',
    examples: ['ΑΒΓ-1234', 'XYZ-567'],
    annotationRule: 'Ολόκληρος ο αριθμός πινακίδας',
    whenToTag: 'always'
  },
  {
    id: 'vin',
    name: 'VIN',
    nameEn: 'VIN',
    topic: 'vehicle',
    type: 'direct',
    description: 'Μοναδικός κωδικός που χρησιμοποιείται για την αναγνώριση μηχανοκίνητων οχημάτων',
    examples: ['1HGBH41JXMN109186', '1A2B3C4D5E6F78901'],
    annotationRule: 'Ολόκληρος ο κωδικός VIN, συμπεριλαμβανομένων demo/υποθετικών',
    whenToTag: 'always'
  },
  {
    id: 'vehicleIdentifiers',
    name: 'Αναγνωριστικά Οχήματος',
    nameEn: 'Vehicle Identifiers',
    topic: 'vehicle',
    type: 'strongIndirect',
    description: 'Μάρκα οχήματος, έτος μοντέλου, όγκος κινητήρα, ιπποδύναμη για προσδιορισμό συγκεκριμένου οχήματος',
    examples: ['Mercedes-AMG GT', '2009 Chevrolet Colorado LT 4dr Crew Cab'],
    annotationRule: 'Όλες οι συγκεκριμένες αναφορές, όχι γενικοί τύποι όπως "SUV"',
    whenToTag: 'always'
  },

  // ============ ΑΡΧΕΙΑ ============
  {
    id: 'digitalCommunicationHistory',
    name: 'Ιστορικό Ψηφιακής Επικοινωνίας',
    nameEn: 'Digital Communication History',
    topic: 'records',
    type: 'weakIndirect',
    description: 'Ημερολόγια ή αρχεία ιδιωτικών κλήσεων, SMS ή άλλων ψηφιακών επικοινωνιών',
    examples: ['2023-10-02 10:20: +1234567890', 'call log from yesterday'],
    annotationRule: 'Ολόκληρο το αρχείο επικοινωνίας συμπεριλαμβανομένων timestamps',
    whenToTag: 'always'
  },
  {
    id: 'criminalRecord',
    name: 'Ποινικό Μητρώο',
    nameEn: 'Criminal Record',
    topic: 'records',
    type: 'weakIndirect',
    description: 'Προσωπικό ποινικό ιστορικό, εγκληματική δραστηριότητα ή επίσημα αρχεία',
    examples: ['καταδικάστηκε για κλοπή', 'ποινικό παρελθόν'],
    annotationRule: 'Το περιεχόμενο που αφορά ποινικό μητρώο',
    whenToTag: 'depends'
  },
  {
    id: 'employmentInformation',
    name: 'Πληροφορίες Απασχόλησης',
    nameEn: 'Employment Information',
    topic: 'records',
    type: 'strongIndirect',
    description: 'Δεδομένα σχετικά με την απασχόληση, τίτλο εργασίας, ιστορικό, τόπο εργασίας',
    examples: ['αναλυτής στην Amazon', 'CEO της εταιρείας', 'εργάζομαι εκεί 5 χρόνια'],
    annotationRule: 'Όχι μελλοντικές επιχειρήσεις/εργασίες',
    whenToTag: 'depends'
  },
  {
    id: 'educationalAttainment',
    name: 'Εκπαιδευτικά Επιτεύγματα',
    nameEn: 'Educational Attainment',
    topic: 'records',
    type: 'strongIndirect',
    description: 'Ανώτατο επίπεδο εκπαίδευσης (λύκειο, πτυχίο, διδακτορικό)',
    examples: ['πτυχίο', 'M.A', 'M.Phil', 'διδακτορικό'],
    annotationRule: 'Πολλαπλές αναφορές στην ίδια κατηγορία',
    whenToTag: 'depends'
  },
  {
    id: 'educationLevel',
    name: 'Επίπεδο Εκπαίδευσης',
    nameEn: 'Education Level',
    topic: 'records',
    type: 'strongIndirect',
    description: 'Τρέχον επίπεδο εκπαίδευσης (τελειόφοιτος λυκείου)',
    examples: ['τελειόφοιτος λυκείου', 'φοιτητής πανεπιστημίου'],
    annotationRule: 'Το τρέχον επίπεδο',
    whenToTag: 'depends'
  },
  {
    id: 'studentRecords',
    name: 'Φοιτητικά Αρχεία',
    nameEn: 'Student Records',
    topic: 'records',
    type: 'weakIndirect',
    description: 'Δεδομένα σχετικά με τα στοιχεία του φοιτητικού μητρώου',
    examples: ['βαθμοί', 'κατάσταση εγγραφής', 'πειθαρχικά μητρώα'],
    annotationRule: 'Στοιχεία φοιτητικού μητρώου',
    whenToTag: 'depends'
  },

  // ============ ΦΥΣΙΚΑ & ΙΑΤΡΙΚΑ ΣΤΟΙΧΕΙΑ ============
  {
    id: 'healthcareDelivery',
    name: 'Παράδοση Υγειονομικής Περίθαλψης',
    nameEn: 'Healthcare Delivery',
    topic: 'physical',
    type: 'weakIndirect',
    description: 'Παροχή υπηρεσιών υγειονομικής περίθαλψης ή ευεξίας, συμπεριλαμβανομένων παρόχων',
    examples: ['Δρ. Ρόχας αφαίρεσε', 'υπηρεσίες φυσικοθεραπείας', 'χειρουργική επέμβαση'],
    annotationRule: 'Περιλαμβάνει και το πλαίσιο χειρουργικών επεμβάσεων',
    whenToTag: 'depends'
  },
  {
    id: 'calculatedFitnessData',
    name: 'Δεδομένα Φυσικής Κατάστασης',
    nameEn: 'Calculated Fitness Data',
    topic: 'physical',
    type: 'weakIndirect',
    description: 'Μετρήσεις που σχετίζονται με τη φυσική κατάσταση και την άσκηση',
    examples: ['10000 βήματα', 'καύση 500 θερμίδων', 'προπόνηση 45 λεπτά'],
    annotationRule: 'Προσωπικά ρεκόρ, μετρήσεις κίνησης, καύση θερμίδων',
    whenToTag: 'depends'
  },
  {
    id: 'healthInformation',
    name: 'Πληροφορίες Υγείας',
    nameEn: 'Health Information',
    topic: 'physical',
    type: 'strongIndirect',
    description: 'Ιστορικό υγείας, ιατρικές διαδικασίες, φάρμακα, ζωτικά σημεία',
    examples: ['αρτηριακή πίεση 120/80', 'ομάδα αίματος O+', 'εμβόλιο COVID'],
    annotationRule: 'Όλες οι γενικές και ειδικές ιατρικές καταστάσεις',
    whenToTag: 'depends'
  },

  // ============ ΣΧΕΣΕΙΣ & ΤΑΥΤΟΤΗΤΑ ============
  {
    id: 'educationalAffiliation',
    name: 'Εκπαιδευτική Ένταξη',
    nameEn: 'Educational Affiliation',
    topic: 'affiliation',
    type: 'strongIndirect',
    description: 'Δηλώσεις εκπαιδευτικής ένταξης, συμμετοχή σε ομάδες φοιτητών ή αποφοίτων',
    examples: ['πανεπιστήμιο Αθηνών', 'απόφοιτος MIT'],
    annotationRule: 'Εκπαιδευτικές εκδηλώσεις που παρακολούθησαν',
    whenToTag: 'depends'
  },
  {
    id: 'military',
    name: 'Στρατιωτική Ένταξη',
    nameEn: 'Military',
    topic: 'affiliation',
    type: 'weakIndirect',
    description: 'Στρατιωτική ένταξη, κατάσταση βετεράνου, βαθμός',
    examples: ['βετεράνος πολέμου', 'λοχαγός', 'υπηρέτησα στον στρατό'],
    annotationRule: 'Στρατιωτικός βαθμός και κατάσταση',
    whenToTag: 'depends'
  },
  {
    id: 'laborUnion',
    name: 'Εργατικό Σωματείο',
    nameEn: 'Labor Union',
    topic: 'affiliation',
    type: 'weakIndirect',
    description: 'Στοιχεία που υποδηλώνουν την ιδιότητα μέλους σε επαγγελματικό ή εργατικό σωματείο',
    examples: ['μέλος ΓΣΕΕ', 'συνδικαλιστής'],
    annotationRule: 'Ιδιότητα μέλους σε σωματείο',
    whenToTag: 'depends'
  },
  {
    id: 'ethnicityOrRace',
    name: 'Εθνότητα ή Φυλή',
    nameEn: 'Ethnicity or Race',
    topic: 'affiliation',
    type: 'strongIndirect',
    description: 'Συγγένεια με εθνοτική ομάδα, εθνικότητα, κάστα, φυλή',
    examples: ['Αφροαμερικανός', 'Λατίνος', 'Έλληνας'],
    annotationRule: 'Όχι εθνική ταυτότητα',
    whenToTag: 'depends'
  },
  {
    id: 'linguisticIdentity',
    name: 'Γλωσσική Ταυτότητα',
    nameEn: 'Linguistic Identity',
    topic: 'affiliation',
    type: 'strongIndirect',
    description: 'Γλώσσες που χρησιμοποιούνται στην επικοινωνία',
    examples: ['μητρική γλώσσα ελληνικά', 'μιλάω τρεις γλώσσες'],
    annotationRule: 'Διαφοροποιείται από τη γλώσσα ενός κειμένου',
    whenToTag: 'depends'
  },
  {
    id: 'cityOfBirth',
    name: 'Πόλη Γέννησης',
    nameEn: 'City of Birth',
    topic: 'affiliation',
    type: 'strongIndirect',
    description: 'Πόλη γέννησης ενός ατόμου',
    examples: ['γεννήθηκα στην Αθήνα', 'καταγωγή από Θεσσαλονίκη'],
    annotationRule: 'Μόνο το όνομα της πόλης',
    whenToTag: 'depends'
  },
  {
    id: 'nationalOrigin',
    name: 'Εθνική Καταγωγή',
    nameEn: 'National Origin',
    topic: 'affiliation',
    type: 'weakIndirect',
    description: 'Εθνική καταγωγή, συμπεριλαμβανομένης της χώρας γέννησης',
    examples: ['είμαι από την Κένυα', 'γεννήθηκα στην Ελλάδα'],
    annotationRule: 'Χώρα γέννησης ή καταγωγής',
    whenToTag: 'depends'
  },
  {
    id: 'citizenshipImmigrationStatus',
    name: 'Ιθαγένεια & Μεταναστευτικό Καθεστώς',
    nameEn: 'Citizenship Immigration Status',
    topic: 'affiliation',
    type: 'weakIndirect',
    description: 'Δεδομένα που σχετίζονται με την ιθαγένεια ή το μεταναστευτικό καθεστώς',
    examples: ['πολίτης ΗΠΑ', 'αίτηση για βίζα', 'καθεστώς πρόσφυγα'],
    annotationRule: 'Εξαιρούνται οι εκφράσεις εθνικής ταυτότητας',
    whenToTag: 'depends'
  },
  {
    id: 'faithSpirituality',
    name: 'Πίστη & Πνευματικότητα',
    nameEn: 'Faith Spirituality',
    topic: 'affiliation',
    type: 'strongIndirect',
    description: 'Θρησκευτικά, πνευματικά ή φιλοσοφικά συστήματα πεποιθήσεων',
    examples: ['Χριστιανός', 'Μουσουλμάνος', 'Βουδιστής', 'άθεος'],
    annotationRule: 'Θρησκευτικές και πνευματικές προσχωρήσεις',
    whenToTag: 'depends'
  },
  {
    id: 'politics',
    name: 'Πολιτική',
    nameEn: 'Politics',
    topic: 'affiliation',
    type: 'weakIndirect',
    description: 'Πολιτική τοποθέτηση, κοινωνικοπολιτικά ζητήματα και δραστηριότητα ψηφοφορίας',
    examples: ['ψήφισα ΣΥΡΙΖΑ', 'συντηρητικές απόψεις', 'δημοκρατικός'],
    annotationRule: 'Πολιτικές πεποιθήσεις και δραστηριότητες',
    whenToTag: 'depends'
  },
  {
    id: 'genderExpansive',
    name: 'Μη-δυαδική Ταυτότητα Φύλου',
    nameEn: 'Gender Expansive',
    topic: 'affiliation',
    type: 'strongIndirect',
    description: 'Ταυτότητες φύλου εκτός της δυαδικής ταυτότητας αρσενικού/θηλυκού',
    examples: ['μη δυαδικός', 'διαφυλικός', 'genderfluid'],
    annotationRule: 'Συγκεκριμένα μη δυαδικές και διαφυλικές ταυτότητες',
    whenToTag: 'depends'
  },
  {
    id: 'personalInterest',
    name: 'Προσωπικό Ενδιαφέρον',
    nameEn: 'Personal Interest',
    topic: 'affiliation',
    type: 'strongIndirect',
    description: 'Εκφράσεις προσωπικού ενδιαφέροντος ή συγγένειας με θέμα, δραστηριότητα',
    examples: ['λατρεύω τη μουσική', 'παίζω τένις', 'αγαπώ το μαγείρεμα'],
    annotationRule: 'Αθλητισμός, εκπαίδευση, μόδα, γυμναστική, τέχνες, ταξίδια',
    whenToTag: 'depends'
  },
  {
    id: 'sexualInformation',
    name: 'Σεξουαλικές Πληροφορίες',
    nameEn: 'Sexual Information',
    topic: 'affiliation',
    type: 'strongIndirect',
    description: 'Περιεχόμενο που σχετίζεται με σεξουαλικές πρακτικές, κλίσεις, συντρόφους',
    examples: ['queer', 'gay', 'straight', 'ομοφυλόφιλος', 'αμφιφυλόφιλος'],
    annotationRule: 'Σεξουαλικές πρακτικές και ταυτότητες',
    whenToTag: 'depends'
  },

  // ============ ΚΟΙΝΩΝΙΚΗ ΙΣΤΟΡΙΑ ============
  {
    id: 'maritalRelationshipStatus',
    name: 'Κατάσταση Σχέσης',
    nameEn: 'Marital Relationship Status',
    topic: 'social',
    type: 'strongIndirect',
    description: 'Κατάσταση σχέσης, συμπεριλαμβανομένου του σταδίου ή του νομικού καθεστώτος',
    examples: ['εργένης', 'παντρεμένος', 'αρραβωνιασμένος', 'διαζευγμένος'],
    annotationRule: 'Άλλες σχέσεις όπως αδέλφια, ξαδέλφια, ανίψια',
    whenToTag: 'depends'
  },
  {
    id: 'parentalStatus',
    name: 'Κατάσταση Γονέα',
    nameEn: 'Parental Status',
    topic: 'social',
    type: 'strongIndirect',
    description: 'Κατάσταση γονέα, συμπεριλαμβανομένης της υιοθεσίας ή της αναδοχής',
    examples: ['είμαι πατέρας 3 αγοριών', 'μητέρα δύο κοριτσιών', 'υιοθέτησα'],
    annotationRule: 'Τα στοιχεία τόσο του γονέα όσο και των παιδιών επισημαίνονται',
    whenToTag: 'depends'
  },
  {
    id: 'grandparentStatus',
    name: 'Κατάσταση Παππού/Γιαγιάς',
    nameEn: 'Grandparent Status',
    topic: 'social',
    type: 'strongIndirect',
    description: 'Παππούς και Γιαγιά',
    examples: ['είμαι παππούς', 'γιαγιά για πρώτη φορά', 'εγγονό μου'],
    annotationRule: 'Κατάσταση ως παππούς ή γιαγιά',
    whenToTag: 'depends'
  },
  {
    id: 'caregiverStatus',
    name: 'Κατάσταση Φροντιστή',
    nameEn: 'Caregiver Status',
    topic: 'social',
    type: 'weakIndirect',
    description: 'Καθεστώς ως φροντιστής για καθημερινή φροντίδα άλλου ενήλικα',
    examples: ['φροντίζω τη μητέρα μου', 'caregiver για ηλικιωμένο'],
    annotationRule: 'Άμισθη, μη επαγγελματική φροντίδα',
    whenToTag: 'depends'
  },
  {
    id: 'tragedyHardship',
    name: 'Τραγωδία & Δυσκολία',
    nameEn: 'Tragedy Hardship',
    topic: 'social',
    type: 'weakIndirect',
    description: 'Περιεχόμενο που υποδηλώνει ατομική εμπειρία τραγωδίας ή δυσκολίας',
    examples: ['έχασα τον πατέρα μου', 'θύμα εγκλήματος', 'προσωπική απώλεια'],
    annotationRule: 'Προσωπικές απώλειες και ιστορικό ως θύμα εγκλήματος',
    whenToTag: 'depends'
  }
];

// Ομαδοποίηση κατηγοριών ανά θέμα
export const piiCategoriesByTopic = piiCategories.reduce<Record<string, PIICategory[]>>((acc, category) => {
  if (!acc[category.topic]) {
    acc[category.topic] = [];
  }
  acc[category.topic].push(category);
  return acc;
}, {});

// Ομαδοποίηση κατηγοριών ανά τύπο
export const piiCategoriesByType = piiCategories.reduce<Record<string, PIICategory[]>>((acc, category) => {
  if (!acc[category.type]) {
    acc[category.type] = [];
  }
  acc[category.type].push(category);
  return acc;
}, {});

// Χαρτογράφηση θεμάτων σε ελληνικά
export const topicLabels: Record<PIITopic, string> = {
  contact: 'Επικοινωνία',
  governmentId: 'Κρατικά Αναγνωριστικά',
  age: 'Ηλικία',
  financial: 'Οικονομικά',
  products: 'Προϊόντα & Συσκευές',
  vehicle: 'Οχήματα',
  records: 'Αρχεία',
  physical: 'Φυσικά & Ιατρικά',
  affiliation: 'Συγγένεια & Ταυτότητα',
  social: 'Κοινωνικό Ιστορικό'
};

// Χαρτογράφηση τύπων σε ελληνικά
export const typeLabels: Record<PIIType, string> = {
  direct: 'Άμεση PII',
  strongIndirect: 'Ισχυρή Έμμεση PII',
  weakIndirect: 'Αδύναμη Έμμεση PII'
};

// Χαρτογράφηση τύπων σε χρώματα (με υποστήριξη dark mode)
export const typeColors: Record<PIIType, string> = {
  direct: 'bg-red-100 dark:bg-red-900/30 border-red-500 dark:border-red-400 text-red-800 dark:text-red-200',
  strongIndirect: 'bg-amber-100 dark:bg-amber-900/30 border-amber-500 dark:border-amber-400 text-amber-800 dark:text-amber-200',
  weakIndirect: 'bg-blue-100 dark:bg-blue-900/30 border-blue-500 dark:border-blue-400 text-blue-800 dark:text-blue-200'
};
