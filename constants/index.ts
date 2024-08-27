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
        href: 'admin',
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
        href: 'list/announcements',
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
      // {
      //   icon: '/assets/icons/logout.png',
      //   label: 'Logout',
      //   href: '/logout',
      //   visible: ['admin', 'leader', 'member', 'worker'],
      // },
    ],
  },
]

export const eventsData = [
  {
    id: 1,
    title: 'Lake Trip',
    class: '1A',
    date: '2025-01-01',
    startTime: '10:00',
    endTime: '11:00',
  },
  {
    id: 2,
    title: 'Picnic',
    class: '2A',
    date: '2025-01-01',
    startTime: '10:00',
    endTime: '11:00',
  },
  {
    id: 3,
    title: 'Beach Trip',
    class: '3A',
    date: '2025-01-01',
    startTime: '10:00',
    endTime: '11:00',
  },
  {
    id: 4,
    title: 'Museum Trip',
    class: '4A',
    date: '2025-01-01',
    startTime: '10:00',
    endTime: '11:00',
  },
  {
    id: 5,
    title: 'Music Concert',
    class: '5A',
    date: '2025-01-01',
    startTime: '10:00',
    endTime: '11:00',
  },
  {
    id: 6,
    title: 'Magician Show',
    class: '1B',
    date: '2025-01-01',
    startTime: '10:00',
    endTime: '11:00',
  },
  {
    id: 7,
    title: 'Lake Trip',
    class: '2B',
    date: '2025-01-01',
    startTime: '10:00',
    endTime: '11:00',
  },
  {
    id: 8,
    title: 'Cycling Race',
    class: '3B',
    date: '2025-01-01',
    startTime: '10:00',
    endTime: '11:00',
  },
  {
    id: 9,
    title: 'Art Exhibition',
    class: '4B',
    date: '2025-01-01',
    startTime: '10:00',
    endTime: '11:00',
  },
  {
    id: 10,
    title: 'Sports Tournament',
    class: '5B',
    date: '2025-01-01',
    startTime: '10:00',
    endTime: '11:00',
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

export const announcementsData = [
  {
    id: 1,
    title: 'About 4A Math Test',
    class: '4A',
    date: '2025-01-01',
  },
  {
    id: 2,
    title: 'About 3A Math Test',
    class: '3A',
    date: '2025-01-01',
  },
  {
    id: 3,
    title: 'About 3B Math Test',
    class: '3B',
    date: '2025-01-01',
  },
  {
    id: 4,
    title: 'About 6A Math Test',
    class: '6A',
    date: '2025-01-01',
  },
  {
    id: 5,
    title: 'About 8C Math Test',
    class: '8C',
    date: '2025-01-01',
  },
  {
    id: 6,
    title: 'About 2A Math Test',
    class: '2A',
    date: '2025-01-01',
  },
  {
    id: 7,
    title: 'About 4C Math Test',
    class: '4C',
    date: '2025-01-01',
  },
  {
    id: 8,
    title: 'About 4B Math Test',
    class: '4B',
    date: '2025-01-01',
  },
  {
    id: 9,
    title: 'About 3C Math Test',
    class: '3C',
    date: '2025-01-01',
  },
  {
    id: 10,
    title: 'About 1C Math Test',
    class: '1C',
    date: '2025-01-01',
  },
]

export const studentsData = [
  {
    id: 1,
    studentId: '1234567890',
    name: 'John Doe',
    email: 'john@doe.com',
    photo:
      'https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200',
    phone: '1234567890',
    grade: 5,
    class: '1B',
    address: '123 Main St, Anytown, USA',
  },
  {
    id: 2,
    studentId: '1234567890',
    name: 'Jane Doe',
    email: 'jane@doe.com',
    photo:
      'https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200',
    phone: '1234567890',
    grade: 5,
    class: '5A',
    address: '123 Main St, Anytown, USA',
  },
  {
    id: 3,
    studentId: '1234567890',
    name: 'Mike Geller',
    email: 'mike@geller.com',
    photo:
      'https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1200',
    phone: '1234567890',
    grade: 5,
    class: '5A',
    address: '123 Main St, Anytown, USA',
  },
  {
    id: 4,
    studentId: '1234567890',
    name: 'Jay French',
    email: 'jay@gmail.com',
    photo:
      'https://images.pexels.com/photos/1187765/pexels-photo-1187765.jpeg?auto=compress&cs=tinysrgb&w=1200',
    phone: '1234567890',
    grade: 5,
    class: '5A',
    address: '123 Main St, Anytown, USA',
  },
  {
    id: 5,
    studentId: '1234567890',
    name: 'Jane Smith',
    email: 'jane@gmail.com',
    photo:
      'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1200',
    phone: '1234567890',
    grade: 5,
    class: '5A',
    address: '123 Main St, Anytown, USA',
  },
  {
    id: 6,
    studentId: '1234567890',
    name: 'Anna Santiago',
    email: 'anna@gmail.com',
    photo:
      'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1200',
    phone: '1234567890',
    grade: 5,
    class: '5A',
    address: '123 Main St, Anytown, USA',
  },
  {
    id: 7,
    studentId: '1234567890',
    name: 'Allen Black',
    email: 'allen@black.com',
    photo:
      'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1200',
    phone: '1234567890',
    grade: 5,
    class: '5A',
    address: '123 Main St, Anytown, USA',
  },
  {
    id: 8,
    studentId: '1234567890',
    name: 'Ophelia Castro',
    email: 'ophelia@castro.com',
    photo:
      'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1200',
    phone: '1234567890',
    grade: 5,
    class: '5A',
    address: '123 Main St, Anytown, USA',
  },
  {
    id: 9,
    studentId: '1234567890',
    name: 'Derek Briggs',
    email: 'derek@briggs.com',
    photo:
      'https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1200',
    phone: '1234567890',
    grade: 5,
    class: '5A',
    address: '123 Main St, Anytown, USA',
  },
  {
    id: 10,
    studentId: '1234567890',
    name: 'John Glover',
    email: 'john@glover.com',
    photo:
      'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1200',
    phone: '1234567890',
    grade: 5,
    class: '5A',
    address: '123 Main St, Anytown, USA',
  },
]

export const calendarEvents = [
  {
    title: 'Math',
    allDay: false,
    start: new Date(2024, 7, 19, 8, 0),
    end: new Date(2024, 7, 19, 8, 45),
  },
  {
    title: 'English',
    allDay: false,
    start: new Date(2024, 7, 19, 9, 0),
    end: new Date(2024, 7, 19, 9, 45),
  },
  {
    title: 'Biology',
    allDay: false,
    start: new Date(2024, 7, 19, 10, 0),
    end: new Date(2024, 7, 19, 10, 45),
  },
  {
    title: 'Physics',
    allDay: false,
    start: new Date(2024, 7, 19, 11, 0),
    end: new Date(2024, 7, 19, 11, 45),
  },
  {
    title: 'Chemistry',
    allDay: false,
    start: new Date(2024, 7, 19, 13, 0),
    end: new Date(2024, 7, 19, 13, 45),
  },
  {
    title: 'History',
    allDay: false,
    start: new Date(2024, 7, 19, 14, 0),
    end: new Date(2024, 7, 19, 14, 45),
  },
  {
    title: 'English',
    allDay: false,
    start: new Date(2024, 7, 20, 9, 0),
    end: new Date(2024, 7, 20, 9, 45),
  },
  {
    title: 'Biology',
    allDay: false,
    start: new Date(2024, 7, 20, 10, 0),
    end: new Date(2024, 7, 20, 10, 45),
  },
  {
    title: 'Physics',
    allDay: false,
    start: new Date(2024, 7, 20, 11, 0),
    end: new Date(2024, 7, 20, 11, 45),
  },

  {
    title: 'History',
    allDay: false,
    start: new Date(2024, 7, 20, 14, 0),
    end: new Date(2024, 7, 20, 14, 45),
  },
  {
    title: 'Math',
    allDay: false,
    start: new Date(2024, 7, 21, 8, 0),
    end: new Date(2024, 7, 21, 8, 45),
  },
  {
    title: 'Biology',
    allDay: false,
    start: new Date(2024, 7, 21, 10, 0),
    end: new Date(2024, 7, 21, 10, 45),
  },

  {
    title: 'Chemistry',
    allDay: false,
    start: new Date(2024, 7, 21, 13, 0),
    end: new Date(2024, 7, 21, 13, 45),
  },
  {
    title: 'History',
    allDay: false,
    start: new Date(2024, 7, 21, 14, 0),
    end: new Date(2024, 7, 21, 14, 45),
  },
  {
    title: 'English',
    allDay: false,
    start: new Date(2024, 7, 22, 9, 0),
    end: new Date(2024, 7, 22, 9, 45),
  },
  {
    title: 'Biology',
    allDay: false,
    start: new Date(2024, 7, 22, 10, 0),
    end: new Date(2024, 7, 22, 10, 45),
  },
  {
    title: 'Physics',
    allDay: false,
    start: new Date(2024, 7, 22, 11, 0),
    end: new Date(2024, 7, 22, 11, 45),
  },

  {
    title: 'History',
    allDay: false,
    start: new Date(2024, 7, 22, 14, 0),
    end: new Date(2024, 7, 22, 14, 45),
  },
  {
    title: 'Math',
    allDay: false,
    start: new Date(2024, 7, 23, 8, 0),
    end: new Date(2024, 7, 23, 8, 45),
  },
  {
    title: 'English',
    allDay: false,
    start: new Date(2024, 8, 23, 9, 0),
    end: new Date(2024, 8, 23, 9, 45),
  },

  {
    title: 'Physics',
    allDay: false,
    start: new Date(2024, 7, 23, 11, 0),
    end: new Date(2024, 7, 23, 11, 45),
  },
  {
    title: 'Chemistry',
    allDay: false,
    start: new Date(2024, 7, 23, 13, 0),
    end: new Date(2024, 7, 23, 13, 45),
  },
  {
    title: 'History',
    allDay: false,
    start: new Date(2024, 7, 23, 14, 0),
    end: new Date(2024, 7, 23, 14, 45),
  },
]
