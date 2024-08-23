'use client'

import * as React from 'react'
import { Label, Pie, PieChart, Sector } from 'recharts'
import { PieSectorDataItem } from 'recharts/types/polar/Pie'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const desktopData = [
  { attribute: 'leaders', desktop: 505, fill: '#C3EBFA' },
  { attribute: 'workers', desktop: 1045, fill: '#CFCEFF' },
  { attribute: 'members', desktop: 2950, fill: '#FAE27C' },
  // { attribute: 'april', desktop: 173, fill: 'var(--color-april)' },
  // { attribute: 'may', desktop: 209, fill: 'var(--color-may)' },
]

const chartConfig = {
  visitors: {
    label: 'Visitors',
  },
  desktop: {
    label: 'Desktop',
  },
  mobile: {
    label: 'Mobile',
  },
  leaders: {
    label: 'Leaders',
    color: '#C3EBFA',
  },
  workers: {
    label: 'Workers',
    color: '#CFCEFF',
  },
  members: {
    label: 'Members',
    color: '#FAE27C',
  },
  // april: {
  //   label: 'April',
  //   color: 'hsl(var(--chart-4))',
  // },
  // may: {
  //   label: 'May',
  //   color: 'hsl(var(--chart-5))',
  // },
} satisfies ChartConfig

export function CountChart() {
  const id = 'Registered Members'
  const [activeMonth, setActiveMonth] = React.useState(desktopData[0].attribute)

  const activeIndex = React.useMemo(
    () => desktopData.findIndex((item) => item.attribute === activeMonth),
    [activeMonth]
  )
  const months = React.useMemo(
    () => desktopData.map((item) => item.attribute),
    []
  )

  return (
    <Card data-chart={id} className='flex flex-col h-full w-full'>
      <ChartStyle id={id} config={chartConfig} />
      <CardHeader className='flex-row items-start gap-2 space-y-0 pb-0'>
        <div className='grid gap-1'>
          <CardTitle>Registered</CardTitle>
          <CardDescription>Total 4500</CardDescription>
        </div>
        <Select value={activeMonth} onValueChange={setActiveMonth}>
          <SelectTrigger
            className='ml-auto h-7 w-[130px] rounded-lg pl-2.5'
            aria-label='Select a value'
          >
            <SelectValue placeholder='Select Attribute' />
          </SelectTrigger>
          <SelectContent
            align='end'
            className='rounded-xl bg-white dark:bg-black'
          >
            {months.map((key) => {
              const config = chartConfig[key as keyof typeof chartConfig]

              if (!config) {
                return null
              }

              return (
                <SelectItem
                  key={key}
                  value={key}
                  className='rounded-lg [&_span]:flex bg-white dark:bg-black'
                >
                  <div className='flex items-center gap-2 text-xs'>
                    <span
                      className='flex h-3 w-3 shrink-0 rounded-sm'
                      style={{
                        backgroundColor: `var(--color-${key})`,
                      }}
                    />
                    {config?.label}
                  </div>
                </SelectItem>
              )
            })}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className='flex flex-1 justify-center pb-0 relative'>
        <div className='absolute z-50 items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <h2 className='font-bold text-3xl text-center'>
            {desktopData[activeIndex].desktop.toLocaleString()}
          </h2>
          <p className='capitalize text-xs text-center'>{activeMonth}</p>
        </div>
        <ChartContainer
          id={id}
          config={chartConfig}
          className='mx-auto aspect-square w-full max-w-[300px]'
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={desktopData}
              dataKey='desktop'
              nameKey='attribute'
              innerRadius={60}
              strokeWidth={5}
              activeIndex={activeIndex}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <g>
                  <Sector {...props} outerRadius={outerRadius + 10} />
                  <Sector
                    {...props}
                    outerRadius={outerRadius + 25}
                    innerRadius={outerRadius + 12}
                  />
                </g>
              )}
            >
              {/* <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor='middle'
                        dominantBaseline='middle'
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className='fill-foreground text-3xl font-bold capitalize dark:text-white'
                        >
                          {desktopData[activeIndex].desktop.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className='fill-muted-foreground '
                        >
                          {activeMonth}
                        </tspan>
                      </text>
                    )
                  }
                }}
              /> */}
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>

      {/* BOTTOM  */}
      <div className='flex justify-evenly items-center text-center pb-2'>
        <div className='flex flex-col gap-1 items-center'>
          <div className='w-5 h-5 bg-susuYellow rounded-full'></div>
          <h1 className='font-bold'>2,950</h1>
          <span className='text-xs'> (65.5%)</span>
          <h2 className='text-xs text-gray-500'>Members</h2>
        </div>
        <div className='flex flex-col gap-1 items-center'>
          <div className='w-5 h-5 bg-susuPurple rounded-full'></div>
          <h1 className='font-bold'>1,045</h1>
          <span className='text-xs'> (23.2%)</span>
          <h2 className='text-xs text-gray-500'>Workers</h2>
        </div>
        <div className='flex flex-col gap-1 items-center'>
          <div className='w-5 h-5 bg-susuSky rounded-full'></div>
          <h1 className='font-bold'>505</h1>
          <span className='text-xs'> (11.3%)</span>
          <h2 className='text-xs text-gray-500'>Leaders</h2>
        </div>
      </div>
    </Card>
  )
}
