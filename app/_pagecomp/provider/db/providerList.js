'use server'
import db from 'more/lib/prisma'
import { revalidatePath } from 'next/cache'
import {
  FilterFuncType,
  SortFunc,
  getCarIdRetunCarInfo,
  getServiceIdRetunServiceInfo
} from 'more/db/utlDb'
import { getProviderWithCarNames, getProvidersRate } from './providerDButl'
import { CollectRatine } from './rateDb'

export const getProviders = async (pageNo, query) => {
  const { vechile } = query || {}
  let carId
  if (vechile) {
    carId = await db.car.findFirst({
      where: { name: vechile },
      select: { id: true }
    })
  }
  const carCondition = carId
    ? {
        carType: {
          hasEvery: [carId.id]
        }
      }
    : {}

  const limit = parseInt(process.env.PROVODER_PAGE_LIMIT)
  const skip = (pageNo - 1) * limit
  const providers = await db.provider.findMany({
    take: limit,
    skip,
    where: carCondition
  })

  const totalProvidersCount = await db.provider.count({ where: carCondition })
  const pageCount = Math.ceil(totalProvidersCount / limit)
  return { providers, pageCount, totalProvidersCount }
}

export const getProviderList = async (pageNo, query) => {
  const { providers, pageCount, totalProvidersCount } = await getProviders(
    pageNo,
    query
  )

  const getProviderDetails = async provider => {
    const cars = await db.ProviderCarFixing.findMany({
      where: { providerid: provider.id },
      select: { name: true }
    })
    const department = await db.ProviderDepartment.findMany({
      where: { providerid: provider.id },
      select: { department: true }
    })
    const service = await db.ProviderService.findMany({
      where: { providerid: provider.id },
      select: { logo: true }
    })

    try {
      const rate = await CollectRatine(provider.id)
      return { provider, cars, department, service, rate }
    } catch (error) {
      // TODO: Handle error insteed of console log  show Error In  Front Component with Disgist NO
      console.log(error)
      return
    }
  }

  const newProviders = await Promise.all(providers.map(getProviderDetails))

  return {
    providers: newProviders,
    pageCount: pageCount,
    totalProvidersCount: totalProvidersCount
  }
}
