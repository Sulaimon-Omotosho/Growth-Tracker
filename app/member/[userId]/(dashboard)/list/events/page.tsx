// import FormModal from '@/components/FormModal'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { eventsData, role } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Event = {
  id: number
  title: string
  class: string
  date: string
  startTime: string
  endTime: string
}

const columns = [
  {
    header: 'Title',
    accessor: 'title',
  },
  {
    header: 'Department ',
    accessor: 'department',
  },
  {
    header: 'Date ',
    accessor: 'date',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Start Time',
    accessor: 'startTime',
    className: 'hidden md:table-cell',
  },
  {
    header: 'End Time',
    accessor: 'endTime',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Actions',
    accessor: 'actions',
  },
]

const EventsList = () => {
  const renderRow = (item: Event) => (
    <tr
      key={item.id}
      className='border-b border-gray-200 even:bg-slate-50 dark:even:bg-slate-600 hover:bg-susuPurpleLight dark:hover:bg-susuPurple'
    >
      <td className='flex items-center gap-4 p-4'>{item.title}</td>
      <td>{item.class}</td>
      <td className='hidden md:table-cell'>{item.date}</td>
      <td className='hidden md:table-cell'>{item.startTime}</td>
      <td className='hidden md:table-cell'>{item.endTime}</td>
      <td>
        <div className='flex items-center gap-2'>
          {/* {role === 'admin' && (
            <>
              <FormModal table='event' type='update' data={item} />
              <FormModal table='event' type='delete' id={item.id} />
            </>
          )} */}
        </div>
      </td>
    </tr>
  )

  return (
    <div className='bg-white dark:bg-dark-200 p-4 rounded-md flex-1 m-4 mt-0'>
      {/* TOP  */}
      <div className='flex items-center justify-between'>
        <h1 className='hidden md:block'>All Events</h1>
        <div className='flex flex-col md:flex-row gap-4 items-center w-full md:w-auto'>
          <TableSearch />
          <div className='flex items-center gap-4 self-end'>
            <button className='w-8 h-8 flex items-center justify-center bg-susuYellow rounded-full'>
              <Image
                src='/assets/icons/filter.png'
                alt='filter button'
                width={14}
                height={14}
              />
            </button>
            <button className='w-8 h-8 flex items-center justify-center bg-susuYellow rounded-full'>
              <Image
                src='/assets/icons/sort.png'
                alt='sort button'
                width={14}
                height={14}
              />
            </button>
            {/* {role === 'admin' && <FormModal table='event' type='create' />} */}
          </div>
        </div>
      </div>
      {/* LIST  */}
      <Table columns={columns} renderRow={renderRow} data={eventsData} />
      {/* PAGINATION  */}
      <Pagination />
    </div>
  )
}

export default EventsList
