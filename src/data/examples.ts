
import { AnnotationExample, PracticeExercise } from '../types';

/**
 * Παραδείγματα σωστής επισήμανσης για εκπαιδευτικούς σκοπούς
 */
export const annotationExamples: AnnotationExample[] = [
  {
    id: '1',
    text: 'Ο Γιώργος Παπαδόπουλος είναι 35 ετών και ζει στην Αθήνα.',
    annotations: [
      {
        text: 'Γιώργος Παπαδόπουλος',
        category: 'fullName',
        start: 2,
        end: 22
      },
      {
        text: '35',
        category: 'numericAge',
        start: 29,
        end: 31
      },
      {
        text: 'Αθήνα',
        category: 'impreciseLocation',
        start: 50,
        end: 55
      }
    ],
    explanation: 'Το πλήρες όνομα επισημαίνεται ολόκληρο. Για την ηλικία, επισημαίνεται μόνο ο αριθμός (35) και όχι η λέξη "ετών". Η πόλη επισημαίνεται ως αόριστη τοποθεσία.'
  },
  {
    id: '2',
    text: 'Επικοινωνήστε μαζί μου στο maria1990@example.com ή στο +30 6912345678.',
    annotations: [
      {
        text: 'maria1990@example.com',
        category: 'emailPersonal',
        start: 27,
        end: 48
      },
      {
        text: '+30 6912345678',
        category: 'phoneMobilePersonal',
        start: 55,
        end: 69
      }
    ],
    explanation: 'Η διεύθυνση email επισημαίνεται ολόκληρη. Ο αριθμός κινητού τηλεφώνου περιλαμβάνει τον κωδικό χώρας.'
  },
  {
    id: '3',
    text: 'Γεννήθηκα στις 15 Απριλίου 1985 και έχω διαγνωστεί με διαβήτη τύπου 2.',
    annotations: [
      {
        text: '15 Απριλίου 1985',
        category: 'dateOfBirth',
        start: 15,
        end: 31
      },
      {
        text: 'διαγνωστεί με διαβήτη τύπου 2',
        category: 'healthInformation',
        start: 40,
        end: 69
      }
    ],
    explanation: 'Η ημερομηνία γέννησης επισημαίνεται ολόκληρη. Οι πληροφορίες υγείας περιλαμβάνουν το πλήρες πλαίσιο της ιατρικής κατάστασης.'
  },
  {
    id: '4',
    text: 'Ο αριθμός του τραπεζικού μου λογαριασμού είναι GR1601101250000000012300695.',
    annotations: [
      {
        text: 'GR1601101250000000012300695',
        category: 'ibanCode',
        start: 47,
        end: 74
      }
    ],
    explanation: 'Επισημαίνεται μόνο ο κωδικός IBAN, χωρίς το συμφραζόμενο κείμενο.'
  },
  {
    id: '5',
    text: 'Είμαι Χριστιανός Ορθόδοξος και ψηφίζω το Κόμμα Χ.',
    annotations: [
      {
        text: 'Χριστιανός Ορθόδοξος',
        category: 'faithSpirituality',
        start: 6,
        end: 26
      },
      {
        text: 'ψηφίζω το Κόμμα Χ',
        category: 'politics',
        start: 31,
        end: 48
      }
    ],
    explanation: 'Η θρησκευτική ταυτότητα επισημαίνεται πλήρως. Οι πολιτικές πεποιθήσεις περιλαμβάνουν την πολιτική συμμετοχή.'
  },
  {
    id: '6',
    text: 'Ο Δρ. Αλέξανδρος Κώστας μου είπε να παίρνω τα φάρμακά μου κανονικά.',
    annotations: [
      {
        text: 'Δρ. Αλέξανδρος Κώστας',
        category: 'healthcareDelivery',
        start: 2,
        end: 23
      },
      {
        text: 'φάρμακά μου',
        category: 'healthInformation',
        start: 46,
        end: 57
      }
    ],
    explanation: 'Ο γιατρός επισημαίνεται ως παροχή υγειονομικής περίθαλψης. Τα φάρμακα αποτελούν πληροφορίες υγείας.'
  },
  {
    id: '7',
    text: 'Το username μου στο Instagram είναι @maria_travel_2024 και έχω 15.000 followers.',
    annotations: [
      {
        text: '@maria_travel_2024',
        category: 'metaProductIdentifiersPersonal',
        start: 36,
        end: 54
      }
    ],
    explanation: 'Το Instagram username επισημαίνεται ως Meta προϊόν. Το πλήθος των followers δεν αποτελεί PII.'
  },
  {
    id: '8',
    text: 'Οδηγώ ένα Toyota Corolla 2018 με πινακίδα ΑΒΓ-1234.',
    annotations: [
      {
        text: 'Toyota Corolla 2018',
        category: 'vehicleIdentifiers',
        start: 10,
        end: 29
      },
      {
        text: 'ΑΒΓ-1234',
        category: 'licensePlateNumber',
        start: 42,
        end: 50
      }
    ],
    explanation: 'Η μάρκα και το μοντέλο του οχήματος επισημαίνονται ως αναγνωριστικά οχήματος. Η πινακίδα επισημαίνεται ξεχωριστά.'
  },
  {
    id: '9',
    text: 'Έχω συνομιλήσει μέσω WhatsApp με τον πελάτη και του έστειλα το παραστατικό με αξία 1.500€.',
    annotations: [
      {
        text: 'συνομιλήσει μέσω WhatsApp',
        category: 'digitalCommunicationHistory',
        start: 4,
        end: 29
      },
      {
        text: '1.500€',
        category: 'transactionData',
        start: 83,
        end: 89
      }
    ],
    explanation: 'Η επικοινωνία μέσω WhatsApp αποτελεί ιστορικό ψηφιακής επικοινωνίας. Το ποσό συναλλαγής αποτελεί δεδομένα συναλλαγής.'
  },
  {
    id: '10',
    text: 'Η τοποθεσία GPS μου είναι 37.9755°N, 23.7348°E και το κινητό μου έχει αριθμό IMEI 123456789012345.',
    annotations: [
      {
        text: '37.9755°N, 23.7348°E',
        category: 'gpsLocation',
        start: 26,
        end: 46
      },
      {
        text: '123456789012345',
        category: 'mobileEquipmentIdentity',
        start: 82,
        end: 97
      }
    ],
    explanation: 'Οι συντεταγμένες GPS επισημαίνονται ως ακριβής τοποθεσία. Ο IMEI αριθμός είναι αναγνωριστικό συσκευής.'
  },
  {
    id: '11',
    text: 'Σήμερα ο πρόεδρος Μπάιντεν ανακοίνωσε νέα μέτρα, ενώ ο Ντόναλντ Τραμπ σχολίασε την κατάσταση.',
    annotations: [
      {
        text: 'πρόεδρος Μπάιντεν',
        category: 'namePartial',
        start: 10,
        end: 26
      },
      {
        text: 'Ντόναλντ Τραμπ',
        category: 'fullName',
        start: 56,
        end: 70
      }
    ],
    explanation: 'Όλα τα ονόματα δημοσίων προσώπων επισημαίνονται κανονικά. Ο "πρόεδρος Μπάιντεν" είναι μερικό όνομα, ενώ το "Ντόναλντ Τραμπ" είναι πλήρες όνομα.'
  }
];

/**
 * Ασκήσεις για το εργαλείο εξάσκησης
 */
export const practiceExercises: PracticeExercise[] = [
  {
    id: '1',
    text: 'Ονομάζομαι Δημήτρης Αντωνίου, είμαι 42 χρονών και εργάζομαι ως μηχανικός λογισμικού στην εταιρεία TechCorp. Μπορείτε να επικοινωνήσετε μαζί μου στο dimitris@example.com ή στο 6987654321.',
    correctAnnotations: [
      {
        text: 'Δημήτρης Αντωνίου',
        category: 'fullName',
        start: 11,
        end: 28
      },
      {
        text: '42',
        category: 'numericAge',
        start: 36,
        end: 38
      },
      {
        text: 'μηχανικός λογισμικού στην εταιρεία TechCorp',
        category: 'employmentInformation',
        start: 63,
        end: 106
      },
      {
        text: 'dimitris@example.com',
        category: 'emailPersonal',
        start: 148,
        end: 168
      },
      {
        text: '6987654321',
        category: 'phoneMobilePersonal',
        start: 175,
        end: 185
      }
    ],
    difficulty: 'easy'
  },
  {
    id: '2',
    text: 'Είμαι παντρεμένη με δύο παιδιά και ζω στη Θεσσαλονίκη. Γεννήθηκα στις 23/08/1978 και πάσχω από υπέρταση για την οποία παίρνω φάρμακα. Οδηγώ ένα Volkswagen Polo με αριθμό πινακίδας ΝΑΒ-1234.',
    correctAnnotations: [
      {
        text: 'παντρεμένη με δύο παιδιά',
        category: 'parentalStatus',
        start: 6,
        end: 30
      },
      {
        text: 'Θεσσαλονίκη',
        category: 'impreciseLocation',
        start: 42,
        end: 53
      },
      {
        text: '23/08/1978',
        category: 'dateOfBirth',
        start: 70,
        end: 80
      },
      {
        text: 'πάσχω από υπέρταση για την οποία παίρνω φάρμακα',
        category: 'healthInformation',
        start: 85,
        end: 132
      },
      {
        text: 'Volkswagen Polo',
        category: 'vehicleIdentifiers',
        start: 144,
        end: 159
      },
      {
        text: 'ΝΑΒ-1234',
        category: 'licensePlateNumber',
        start: 180,
        end: 188
      }
    ],
    difficulty: 'medium'
  },
  {
    id: '3',
    text: 'Είμαι απόφοιτος του Πανεπιστημίου Αθηνών και έχω μεταπτυχιακό στην Πληροφορική. Ο αριθμός της πιστωτικής μου κάρτας είναι 4111-1111-1111-1111 με ημερομηνία λήξης 05/25. Είμαι μουσουλμάνος και ψηφίζω τακτικά στις εκλογές.',
    correctAnnotations: [
      {
        text: 'απόφοιτος του Πανεπιστημίου Αθηνών',
        category: 'educationalAffiliation',
        start: 6,
        end: 40
      },
      {
        text: 'μεταπτυχιακό στην Πληροφορική',
        category: 'educationalAttainment',
        start: 49,
        end: 78
      },
      {
        text: '4111-1111-1111-1111',
        category: 'bankPaymentCardNumber',
        start: 122,
        end: 141
      },
      {
        text: '05/25',
        category: 'paymentCardExpirationDate',
        start: 162,
        end: 167
      },
      {
        text: 'μουσουλμάνος',
        category: 'faithSpirituality',
        start: 175,
        end: 187
      },
      {
        text: 'ψηφίζω τακτικά στις εκλογές',
        category: 'politics',
        start: 192,
        end: 219
      }
    ],
    difficulty: 'hard'
  },
  {
    id: '4',
    text: 'Χθες συναντήθηκα με τον @john_developer για να συζητήσουμε το νέο project. Το VIN του αυτοκινήτου μου είναι 1HGBH41JXMN109186 και η IP διεύθυνση του server μου είναι 192.168.1.100.',
    correctAnnotations: [
      {
        text: '@john_developer',
        category: 'nonMetaCredentialsPersonal',
        start: 27,
        end: 42
      },
      {
        text: '1HGBH41JXMN109186',
        category: 'vin',
        start: 117,
        end: 134
      },
      {
        text: '192.168.1.100',
        category: 'ipAddress',
        start: 177,
        end: 190
      }
    ],
    difficulty: 'hard'
  },
  {
    id: '5',
    text: 'Η κόρη μου Μαρία έχει επιληψία και παρακολουθεί την Ελένη Δημητριάδου στο δημοτικό σχολείο. Ο αριθμός κινητού της είναι 6978123456 και το Instagram της @maria_school_2024. Στη διεύθυνση Λεωφόρος Αθηνών 123, 12345 Αθήνα έχουμε το σπίτι μας.',
    correctAnnotations: [
      {
        text: 'Μαρία',
        category: 'firstName',
        start: 11,
        end: 16
      },
      {
        text: 'επιληψία',
        category: 'healthInformation',
        start: 22,
        end: 30
      },
      {
        text: 'Ελένη Δημητριάδου',
        category: 'fullName',
        start: 51,
        end: 68
      },
      {
        text: '6978123456',
        category: 'phoneMobilePersonal',
        start: 119,
        end: 129
      },
      {
        text: '@maria_school_2024',
        category: 'metaProductIdentifiersPersonal',
        start: 150,
        end: 168
      },
      {
        text: 'Λεωφόρος Αθηνών 123, 12345 Αθήνα',
        category: 'addressPersonal',
        start: 186,
        end: 220
      }
    ],
    difficulty: 'medium'
  },
  {
    id: '6',
    text: 'Ο γιατρός μου Δρ. Γεώργιος Παπαδόπουλος μου έδωσε μια συνταγή για αντιβιωτικά. Το IBAN μου είναι GR1601101250000000012300695 και ο ΑΦΜ μου 123456789. Είμαι Έλληνας γεννημένος στο Ηράκλειο.',
    correctAnnotations: [
      {
        text: 'Δρ. Γεώργιος Παπαδόπουλος',
        category: 'healthcareDelivery',
        start: 15,
        end: 42
      },
      {
        text: 'συνταγή για αντιβιωτικά',
        category: 'healthInformation',
        start: 58,
        end: 82
      },
      {
        text: 'GR1601101250000000012300695',
        category: 'ibanCode',
        start: 105,
        end: 131
      },
      {
        text: '123456789',
        category: 'individualTaxId',
        start: 147,
        end: 156
      },
      {
        text: 'Έλληνας',
        category: 'nationalOrigin',
        start: 164,
        end: 171
      },
      {
        text: 'Ηράκλειο',
        category: 'cityOfBirth',
        start: 187,
        end: 196
      }
    ],
    difficulty: 'hard'
  },
  {
    id: '7',
    text: 'Μιλάω ελληνικά και αγγλικά και προτιμώ να συμπεριφέρομαι χωρίς ταμπέλες φύλου. Ο παππούς μου ήταν στρατιωτικός και υπηρέτησε στον στρατό ξηράς. Έχω διαγνωστεί με κατάθλιψη και παίρνω αντικαταθλιπτικά.',
    correctAnnotations: [
      {
        text: 'ελληνικά και αγγλικά',
        category: 'linguisticIdentity',
        start: 7,
        end: 28
      },
      {
        text: 'συμπεριφέρομαι χωρίς ταμπέλες φύλου',
        category: 'genderExpansive',
        start: 44,
        end: 80
      },
      {
        text: 'στρατιωτικός και υπηρέτησε στον στρατό ξηράς',
        category: 'military',
        start: 106,
        end: 150
      },
      {
        text: 'διαγνωστεί με κατάθλιψη και παίρνω αντικαταθλιπτικά',
        category: 'healthInformation',
        start: 157,
        end: 208
      }
    ],
    difficulty: 'hard'
  },
  {
    id: '8',
    text: 'Το αυτοκίνητό μου με VIN WBA3B1C50DF123456 έχει πινακίδα ΑΒΓ-5678. Ο αριθμός διπλώματος οδήγησης μου είναι DL123456789 και το διαβατήριό μου PP987654321. Η διεύθυνση MAC του υπολογιστή μου είναι AA:BB:CC:DD:EE:FF.',
    correctAnnotations: [
      {
        text: 'WBA3B1C50DF123456',
        category: 'vin',
        start: 28,
        end: 45
      },
      {
        text: 'ΑΒΓ-5678',
        category: 'licensePlateNumber',
        start: 61,
        end: 69
      },
      {
        text: 'DL123456789',
        category: 'driversLicenseNumber',
        start: 111,
        end: 122
      },
      {
        text: 'PP987654321',
        category: 'passportNumber',
        start: 144,
        end: 155
      },
      {
        text: 'AA:BB:CC:DD:EE:FF',
        category: 'macAddress',
        start: 205,
        end: 222
      }
    ],
    difficulty: 'hard'
  },
  {
    id: '9',
    text: 'Είμαι στα 25-30 χρόνια μου και δουλεύω στην εταιρεία info@company.gr. Το username μου στο Twitter είναι @user123 και το password myPass123!. Αγόρασα Bitcoin στη διεύθυνση 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa.',
    correctAnnotations: [
      {
        text: '25-30 χρόνια',
        category: 'ageBracket',
        start: 13,
        end: 25
      },
      {
        text: 'info@company.gr',
        category: 'emailNonPersonal',
        start: 56,
        end: 71
      },
      {
        text: '@user123',
        category: 'nonMetaCredentialsPersonal',
        start: 103,
        end: 111
      },
      {
        text: 'myPass123!',
        category: 'accessToken',
        start: 129,
        end: 139
      },
      {
        text: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
        category: 'cryptocurrencyIdentifier',
        start: 183,
        end: 217
      }
    ],
    difficulty: 'medium'
  },
  {
    id: '10',
    text: 'Είμαι μέλος του σωματείου ΓΣΕΕ και έχω ποινικό μητρώο καθαρό. Διέρχομαι μια δύσκολη περίοδο λόγω διαζυγίου και είμαι ενήλικη γυναίκα. Ο IMEI του κινητού μου είναι 123456789012345 και το ICCID 89302720123456789012.',
    correctAnnotations: [
      {
        text: 'μέλος του σωματείου ΓΣΕΕ',
        category: 'laborUnion',
        start: 6,
        end: 31
      },
      {
        text: 'ποινικό μητρώο καθαρό',
        category: 'criminalRecord',
        start: 41,
        end: 63
      },
      {
        text: 'δύσκολη περίοδο λόγω διαζυγίου',
        category: 'tragedyHardship',
        start: 82,
        end: 114
      },
      {
        text: 'ενήλικη γυναίκα',
        category: 'lifeStage',
        start: 124,
        end: 140
      },
      {
        text: '123456789012345',
        category: 'mobileEquipmentIdentity',
        start: 175,
        end: 190
      },
      {
        text: '89302720123456789012',
        category: 'iccid',
        start: 207,
        end: 227
      }
    ],
    difficulty: 'hard'
  },
  {
    id: '11',
    text: 'Έχω 1,75m ύψος και ζυγίζω 70kg. Κάνω καθημερινά 8.000 βήματα και έχω παίξει για τον Παναθηναϊκό στη νεότητά μου. Η κάρτα φοιτητή μου έχει αριθμό STU789123 και το CVC της πιστωτικής μου κάρτας είναι 123.',
    correctAnnotations: [
      {
        text: '1,75m ύψος και ζυγίζω 70kg',
        category: 'calculatedFitnessData',
        start: 5,
        end: 32
      },
      {
        text: '8.000 βήματα',
        category: 'calculatedFitnessData',
        start: 51,
        end: 64
      },
      {
        text: 'παίξει για τον Παναθηναϊκό',
        category: 'personalInterest',
        start: 74,
        end: 101
      },
      {
        text: 'STU789123',
        category: 'studentRecords',
        start: 148,
        end: 157
      },
      {
        text: '123',
        category: 'cvc',
        start: 207,
        end: 210
      }
    ],
    difficulty: 'medium'
  },
  {
    id: '12',
    text: 'Το επώνυμό μου είναι Κωνσταντινίδης και με φωνάζουν Κώστα. Έχω συγγενή που χρειάζεται φροντίδα και είμαι παππούς δύο εγγονιών. Η σεξουαλικότητά μου είναι προσωπικό μου θέμα και προτιμώ άτομα του ίδιου φύλου.',
    correctAnnotations: [
      {
        text: 'Κωνσταντινίδης',
        category: 'familyName',
        start: 22,
        end: 37
      },
      {
        text: 'Κώστα',
        category: 'nickname',
        start: 53,
        end: 58
      },
      {
        text: 'συγγενή που χρειάζεται φροντίδα',
        category: 'caregiverStatus',
        start: 65,
        end: 97
      },
      {
        text: 'παππούς δύο εγγονιών',
        category: 'grandparentStatus',
        start: 108,
        end: 129
      },
      {
        text: 'σεξουαλικότητά μου είναι προσωπικό μου θέμα και προτιμώ άτομα του ίδιου φύλου',
        category: 'sexualInformation',
        start: 133,
        end: 210
      }
    ],
    difficulty: 'hard'
  },
  {
    id: '13',
    text: 'Ο λογαριασμός μου στη Εθνική Τράπεζα έχει αριθμό 123-456-789 και έχω αγοράσει μετοχές αξίας 50.000€. Στείλε μου SMS στο 2101234567 ή email στο work@office.com από την εταιρεία σου.',
    correctAnnotations: [
      {
        text: '123-456-789',
        category: 'bankAccountNumber',
        start: 55,
        end: 66
      },
      {
        text: 'μετοχές αξίας 50.000€',
        category: 'financialStatus',
        start: 82,
        end: 104
      },
      {
        text: '2101234567',
        category: 'phoneNonPersonal',
        start: 126,
        end: 136
      },
      {
        text: 'work@office.com',
        category: 'emailNonPersonal',
        start: 149,
        end: 164
      }
    ],
    difficulty: 'medium'
  },
  {
    id: '14',
    text: 'Μου αρέσει η τζαζ μουσική και έχω ένα αυθεντικό ενδιαφέρον για την αστρονομία. Έχω γεννηθεί στην Αμερική αλλά είμαι πολίτης της Ελλάδας. Ο φάκελος με τα πτυχία μου περιέχει το μάστερ από το MIT.',
    correctAnnotations: [
      {
        text: 'τζαζ μουσική',
        category: 'personalInterest',
        start: 15,
        end: 27
      },
      {
        text: 'αυθεντικό ενδιαφέρον για την αστρονομία',
        category: 'personalInterest',
        start: 38,
        end: 77
      },
      {
        text: 'γεννηθεί στην Αμερική',
        category: 'nationalOrigin',
        start: 84,
        end: 106
      },
      {
        text: 'πολίτης της Ελλάδας',
        category: 'citizenshipImmigrationStatus',
        start: 117,
        end: 137
      },
      {
        text: 'μάστερ από το MIT',
        category: 'educationalAttainment',
        start: 178,
        end: 195
      }
    ],
    difficulty: 'medium'
  },
  {
    id: '15',
    text: 'Το όνομά μου αρχίζει με Μ και έχω μεγαλώσει σε μια ρομά κοινότητα. Η ηλικία μου είναι εφηβική και η οικογενειακή μου κατάσταση είναι ότι είμαι άγαμος. Σπουδάζω μέχρι το γυμνάσιο.',
    correctAnnotations: [
      {
        text: 'Μ',
        category: 'namePartial',
        start: 25,
        end: 26
      },
      {
        text: 'ρομά κοινότητα',
        category: 'ethnicityOrRace',
        start: 53,
        end: 67
      },
      {
        text: 'εφηβική',
        category: 'age',
        start: 85,
        end: 92
      },
      {
        text: 'άγαμος',
        category: 'maritalRelationshipStatus',
        start: 145,
        end: 151
      },
      {
        text: 'γυμνάσιο',
        category: 'educationLevel',
        start: 173,
        end: 182
      }
    ],
    difficulty: 'easy'
  },
  {
    id: '16',
    text: 'Η κρυπτομάτικη πορτοφόλι μου με κωδικό access_token_ABC123 είναι συνδεδεμένη με το κινητό που έχει SIM κάρτα με ICCID 89014103211118510720. Η πιστωτική μου κάρτα λήγει 03/25 και έχω πληρώσει 2.500€ για ασφάλεια.',
    correctAnnotations: [
      {
        text: 'access_token_ABC123',
        category: 'accessToken',
        start: 38,
        end: 57
      },
      {
        text: '89014103211118510720',
        category: 'iccid',
        start: 116,
        end: 136
      },
      {
        text: '2.500€ για ασφάλεια',
        category: 'transactionData',
        start: 185,
        end: 205
      }
    ],
    difficulty: 'hard'
  },
  {
    id: '17',
    text: 'Το κινητό μου είναι 6947123456 της εταιρείας και έχει αριθμό MPIN 1234567890. Η διεύθυνση του office είναι Λεωφόρος Συγγρού 100, Αθήνα και το email επικοινωνίας support@company.com.',
    correctAnnotations: [
      {
        text: '6947123456',
        category: 'phoneMobileNonPersonal',
        start: 19,
        end: 29
      },
      {
        text: '1234567890',
        category: 'mobilePhoneIdentificationNumber',
        start: 69,
        end: 79
      },
      {
        text: 'Λεωφόρος Συγγρού 100, Αθήνα',
        category: 'addressNonPersonal',
        start: 105,
        end: 133
      },
      {
        text: 'support@company.com',
        category: 'emailNonPersonal',
        start: 164,
        end: 183
      }
    ],
    difficulty: 'medium'
  },
  {
    id: '18',
    text: 'Στη διεύθυνση μου στο Σπίτι μου, Οδός Δήμου 23, 15451 Αθήνα παραλαμβάνω αλληλογραφία. Ο ΑΜΚΑ μου είναι 12345678901 και το Facebook profile @user_facebook_2024.',
    correctAnnotations: [
      {
        text: 'Οδός Δήμου 23, 15451 Αθήνα',
        category: 'addressPersonal',
        start: 34,
        end: 62
      },
      {
        text: '12345678901',
        category: 'socialSecurityNumber',
        start: 104,
        end: 115
      },
      {
        text: '@user_facebook_2024',
        category: 'metaProductIdentifiersPersonal',
        start: 142,
        end: 161
      }
    ],
    difficulty: 'medium'
  },
  {
    id: '19',
    text: 'Ο αριθμός ταυτότητας μου είναι ΑΕ123456 και έχω καταθέσει pin 9876 στην τράπεζα. Παλιότερα υπήρξα φοιτητής με στοιχεία σπουδών και παρακολουθούσα μαθήματα μέχρι το λύκειο.',
    correctAnnotations: [
      {
        text: 'ΑΕ123456',
        category: 'governmentIdentification',
        start: 35,
        end: 43
      },
      {
        text: '9876',
        category: 'financialAccountCredential',
        start: 68,
        end: 72
      },
      {
        text: 'στοιχεία σπουδών',
        category: 'studentRecords',
        start: 124,
        end: 140
      },
      {
        text: 'λύκειο',
        category: 'educationLevel',
        start: 179,
        end: 185
      }
    ],
    difficulty: 'hard'
  },
  {
    id: '20',
    text: 'Η συσκευή μου έχει unique device ID 40A2298A-DA14-4B70-9A35-01C21371154F και συνδέεται στο δίκτυο με MAC address 00:1B:63:84:45:E6. Έχω λάβει μήνυμα στο τηλέφωνο εργασίας 2109876543.',
    correctAnnotations: [
      {
        text: '40A2298A-DA14-4B70-9A35-01C21371154F',
        category: 'uniqueDeviceIdentifier',
        start: 36,
        end: 72
      },
      {
        text: '00:1B:63:84:45:E6',
        category: 'macAddress',
        start: 113,
        end: 130
      },
      {
        text: '2109876543',
        category: 'phoneNonPersonal',
        start: 171,
        end: 181
      }
    ],
    difficulty: 'hard'
  },
  {
    id: '21',
    text: 'Ο Mr. Smith είναι CEO και το παρατσούκλι του είναι "Big Jim". Το μεσαίο του όνομα είναι Alexander.',
    correctAnnotations: [
      {
        text: 'Mr. Smith',
        category: 'namePartial',
        start: 2,
        end: 11
      },
      {
        text: 'Big Jim',
        category: 'nickname',
        start: 53,
        end: 60
      },
      {
        text: 'Alexander',
        category: 'middleName',
        start: 95,
        end: 104
      }
    ],
    difficulty: 'medium'
  },
  {
    id: '22',
    text: 'Η κάρτα μου έχει CVC 123 και αριθμό 4003448271155855. Το IBAN μου είναι GR1601101250000000012300695.',
    correctAnnotations: [
      {
        text: '123',
        category: 'cvc',
        start: 21,
        end: 24
      },
      {
        text: '4003448271155855',
        category: 'bankPaymentCardNumber',
        start: 37,
        end: 53
      },
      {
        text: 'GR1601101250000000012300695',
        category: 'ibanCode',
        start: 72,
        end: 99
      }
    ],
    difficulty: 'easy'
  },
  {
    id: '23',
    text: 'Η πινακίδα του αυτοκινήτου μου είναι ΑΒΓ-1234 και το VIN είναι 1HGBH41JXMN109186. Είναι ένα BMW X5 2020.',
    correctAnnotations: [
      {
        text: 'ΑΒΓ-1234',
        category: 'licensePlateNumber',
        start: 41,
        end: 49
      },
      {
        text: '1HGBH41JXMN109186',
        category: 'vin',
        start: 65,
        end: 82
      },
      {
        text: 'BMW X5 2020',
        category: 'vehicleIdentifiers',
        start: 92,
        end: 104
      }
    ],
    difficulty: 'medium'
  },
  {
    id: '24',
    text: 'Το ΑΜΚΑ μου είναι 12345678901 και το ΑΦΜ είναι 123456789. Η άδεια οδήγησης έχει αριθμό ΑΧ1234567.',
    correctAnnotations: [
      {
        text: '12345678901',
        category: 'socialSecurityNumber',
        start: 18,
        end: 29
      },
      {
        text: '123456789',
        category: 'individualTaxId',
        start: 44,
        end: 53
      },
      {
        text: 'ΑΧ1234567',
        category: 'driversLicenseNumber',
        start: 88,
        end: 97
      }
    ],
    difficulty: 'easy'
  },
  {
    id: '25',
    text: 'Έχω αρτηριακή πίεση 120/80 και ομάδα αίματος O+. Πήρα το εμβόλιο COVID και έχω προπονηθεί 45 λεπτά.',
    correctAnnotations: [
      {
        text: '120/80',
        category: 'healthInformation',
        start: 20,
        end: 26
      },
      {
        text: 'ομάδα αίματος O+',
        category: 'healthInformation',
        start: 31,
        end: 47
      },
      {
        text: 'εμβόλιο COVID',
        category: 'healthInformation',
        start: 59,
        end: 72
      },
      {
        text: 'προπονηθεί 45 λεπτά',
        category: 'calculatedFitnessData',
        start: 81,
        end: 100
      }
    ],
    difficulty: 'hard'
  },
  {
    id: '26',
    text: 'Είμαι εργένης, 25 ετών και απόφοιτος MIT. Έχω γεννηθεί στην Αθήνα και είμαι Έλληνας.',
    correctAnnotations: [
      {
        text: 'εργένης',
        category: 'maritalRelationshipStatus',
        start: 6,
        end: 13
      },
      {
        text: '25',
        category: 'numericAge',
        start: 15,
        end: 17
      },
      {
        text: 'απόφοιτος MIT',
        category: 'educationalAffiliation',
        start: 27,
        end: 40
      },
      {
        text: 'Αθήνα',
        category: 'cityOfBirth',
        start: 63,
        end: 68
      },
      {
        text: 'Έλληνας',
        category: 'ethnicityOrRace',
        start: 78,
        end: 85
      }
    ],
    difficulty: 'hard'
  },
  {
    id: '27',
    text: 'Είμαι πατέρας 2 παιδιών και παππούς ενός εγγονού. Φροντίζω τη μητέρα μου που είναι ηλικιωμένη.',
    correctAnnotations: [
      {
        text: 'πατέρας 2 παιδιών',
        category: 'parentalStatus',
        start: 6,
        end: 23
      },
      {
        text: 'παππούς ενός εγγονού',
        category: 'grandparentStatus',
        start: 28,
        end: 48
      },
      {
        text: 'φροντίζω τη μητέρα μου',
        category: 'caregiverStatus',
        start: 50,
        end: 72
      },
      {
        text: 'ηλικιωμένη',
        category: 'age',
        start: 86,
        end: 96
      }
    ],
    difficulty: 'hard'
  },
  {
    id: '28',
    text: 'Είμαι μη δυαδικός, queer, και αγαπώ τη μουσική. Πιστεύω στο Βουδισμό και ψηφίζω αριστερά.',
    correctAnnotations: [
      {
        text: 'μη δυαδικός',
        category: 'genderExpansive',
        start: 6,
        end: 17
      },
      {
        text: 'queer',
        category: 'sexualInformation',
        start: 19,
        end: 24
      },
      {
        text: 'αγαπώ τη μουσική',
        category: 'personalInterest',
        start: 30,
        end: 46
      },
      {
        text: 'Βουδισμό',
        category: 'faithSpirituality',
        start: 63,
        end: 71
      },
      {
        text: 'ψηφίζω αριστερά',
        category: 'politics',
        start: 76,
        end: 91
      }
    ],
    difficulty: 'hard'
  },
  {
    id: '29',
    text: 'Έχω πτυχίο στη φυσική και είμαι τελειόφοιτος λυκείου. Μιλάω ελληνικά ως μητρική γλώσσα.',
    correctAnnotations: [
      {
        text: 'πτυχίο',
        category: 'educationalAttainment',
        start: 4,
        end: 10
      },
      {
        text: 'τελειόφοιτος λυκείου',
        category: 'educationLevel',
        start: 31,
        end: 51
      },
      {
        text: 'ελληνικά ως μητρική γλώσσα',
        category: 'linguisticIdentity',
        start: 60,
        end: 86
      }
    ],
    difficulty: 'medium'
  },
  {
    id: '30',
    text: 'Έχασα τον πατέρα μου πέρυσι και είμαι θύμα εγκλήματος. Υπηρέτησα στον στρατό ως λοχαγός.',
    correctAnnotations: [
      {
        text: 'έχασα τον πατέρα μου',
        category: 'tragedyHardship',
        start: 0,
        end: 20
      },
      {
        text: 'θύμα εγκλήματος',
        category: 'tragedyHardship',
        start: 37,
        end: 52
      },
      {
        text: 'υπηρέτησα στον στρατό ως λοχαγός',
        category: 'military',
        start: 54,
        end: 86
      }
    ],
    difficulty: 'hard'
  },
  {
    id: '31',
    text: 'Διάβασα ένα άρθρο για τον Κυριάκο Μητσοτάκη και τις δηλώσεις του Mark Zuckerberg σχετικά με την τεχνολογία AI.',
    correctAnnotations: [
      {
        text: 'Κυριάκο Μητσοτάκη',
        category: 'fullName',
        start: 27,
        end: 44
      },
      {
        text: 'Mark Zuckerberg',
        category: 'fullName',
        start: 65,
        end: 80
      }
    ],
    difficulty: 'easy'
  }
];
