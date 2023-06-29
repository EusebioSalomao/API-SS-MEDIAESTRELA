import Quota from '../models/Quotas.js'

export const findAllQuotasService = () => Quota.find().sort().populate('nomeMembro').lean()

export const saveQuotaService = (quota) => Quota(quota).save();

export const findQuotaMembro = (id) => Quota.findOne({nomeMembro: id}).lean();

export const updateQuotaService = (id, janeiro, fevereiro, marco, abril, maio, junho, julho, agosto, setembro, outubro, novembro, dezembro) => Quota.findOneAndUpdate({_id: id}, {janeiro, fevereiro, marco, abril, maio, junho, julho, agosto, setembro, outubro, novembro, dezembro})
