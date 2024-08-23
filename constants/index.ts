export let role = 'admin'

export const GenderOptions = ['male', 'female']
export const NewConvert = ['yes', 'no', 'reborn']
export const MaritalStatus = ['single', 'married', 'divorced', 'widowed']

export const MembersFormDefaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  birthDate: new Date(Date.now()),
  gender: 'male' as Gender,
  address: '',
  occupation: '',
  emergencyContactName: '',
  emergencyContactNumber: '',
  primaryPhysician: 'Alyana Cruz',
  insuranceProvider: '',
  insurancePolicyNumber: '',
  allergies: '',
  currentMedication: '',
  familyMedicalHistory: '',
  pastMedicalHistory: '',
  identificationType: 'Birth Certificate',
  identificationNumber: '',
  identificationDocument: [],
  contactConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
}

export const IdentificationTypes = [
  'Birth Certificate',
  "Driver's License",
  'Medical Insurance Card/Policy',
  'Military ID Card',
  'National Identity Card',
  'Passport',
  'Resident Alien Card (Green Card)',
  'Social Security Card',
  'State ID Card',
  'Student ID Card',
  'Voter ID Card',
]

export const Doctors = [
  {
    image: '/assets/images/dr-green.png',
    name: 'John Green',
  },
  {
    image: '/assets/images/dr-cameron.png',
    name: 'Leila Cameron',
  },
  {
    image: '/assets/images/dr-livingston.png',
    name: 'David Livingston',
  },
  {
    image: '/assets/images/dr-peter.png',
    name: 'Evan Peter',
  },
  {
    image: '/assets/images/dr-powell.png',
    name: 'Jane Powell',
  },
  {
    image: '/assets/images/dr-remirez.png',
    name: 'Alex Ramirez',
  },
  {
    image: '/assets/images/dr-lee.png',
    name: 'Jasmine Lee',
  },
  {
    image: '/assets/images/dr-cruz.png',
    name: 'Alyana Cruz',
  },
  {
    image: '/assets/images/dr-sharma.png',
    name: 'Hardik Sharma',
  },
]

export const StatusIcon = {
  scheduled: '/assets/icons/check.svg',
  pending: '/assets/icons/pending.svg',
  cancelled: '/assets/icons/cancelled.svg',
}

export const menuItems = [
  {
    title: 'MENU',
    items: [
      {
        icon: '/assets/icons/home.png',
        label: 'Home',
        href: '/admin',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/assets/icons/leader.png',
        label: 'Leaders',
        href: '/list/leaders',
        visible: ['admin', 'leader'],
      },
      {
        icon: '/assets/icons/worker.png',
        label: 'Workers',
        href: '/list/workers',
        visible: ['admin', 'leader'],
      },
      {
        icon: '/assets/icons/member.png',
        label: 'Members',
        href: '/list/members',
        visible: ['admin', 'leader'],
      },

      // {
      //   icon: '/subject.png',
      //   label: 'Subjects',
      //   href: '/list/subjects',
      //   visible: ['admin'],
      // },
      // {
      //   icon: '/class.png',
      //   label: 'Classes',
      //   href: '/list/classes',
      //   visible: ['admin', 'leader'],
      // },
      // {
      //   icon: '/lesson.png',
      //   label: 'Lessons',
      //   href: '/list/lessons',
      //   visible: ['admin', 'leader'],
      // },
      // {
      //   icon: '/exam.png',
      //   label: 'Exams',
      //   href: '/list/exams',
      //   visible: ['admin', 'leader', 'member', 'worker'],
      // },
      // {
      //   icon: '/assignment.png',
      //   label: 'Assignments',
      //   href: '/list/assignments',
      //   visible: ['admin', 'leader', 'member', 'worker'],
      // },
      // {
      //   icon: '/result.png',
      //   label: 'Results',
      //   href: '/list/results',
      //   visible: ['admin', 'leader', 'member', 'worker'],
      // },
      {
        icon: '/assets/icons/attendance.png',
        label: 'Attendance',
        href: '/list/attendance',
        visible: ['admin', 'leader', 'member', 'worker'],
      },
      {
        icon: '/assets/icons/calendar.png',
        label: 'Events',
        href: '/list/events',
        visible: ['admin', 'leader', 'member', 'worker'],
      },
      {
        icon: '/assets/icons/message.png',
        label: 'Messages',
        href: '/list/messages',
        visible: ['admin', 'leader', 'member', 'worker'],
      },
      {
        icon: '/assets/icons/announcement.png',
        label: 'Announcements',
        href: '/list/announcements',
        visible: ['admin', 'leader', 'member', 'worker'],
      },
    ],
  },
  {
    title: 'OTHER',
    items: [
      {
        icon: '/assets/icons/profile.png',
        label: 'Profile',
        href: '/profile',
        visible: ['admin', 'leader', 'member', 'worker'],
      },
      {
        icon: '/assets/icons/setting.png',
        label: 'Settings',
        href: '/settings',
        visible: ['admin', 'leader', 'member', 'worker'],
      },
      {
        icon: '/assets/icons/logout.png',
        label: 'Logout',
        href: '/logout',
        visible: ['admin', 'leader', 'member', 'worker'],
      },
    ],
  },
]

export const events = [
  {
    id: 1,
    title: 'Lake Trip',
    class:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ad qui laboriosam eum, eveniet quidem hic reiciendis ex tenetur, libero possimus quisquam nobis?',
    date: '2025-01-01',
    startTime: '10:00',
    endTime: '11:00',
  },
  {
    id: 2,
    title: 'Picnic',
    class:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ad qui laboriosam eum, eveniet quidem hic reiciendis ex tenetur, libero possimus quisquam nobis?',
    date: '2025-01-01',
    startTime: '10:00',
    endTime: '11:00',
  },
  {
    id: 3,
    title: 'Beach Trip',
    class:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ad qui laboriosam eum, eveniet quidem hic reiciendis ex tenetur, libero possimus quisquam nobis?',
    date: '2025-01-01',
    startTime: '10:00',
    endTime: '11:00',
  },
]
