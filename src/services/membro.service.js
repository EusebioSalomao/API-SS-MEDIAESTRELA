import Membro from '../models/Membro.js'


export const saveMembroServise = (membro) => Membro(membro).save();

export const findAllMembrosService = () => Membro.find().sort().lean();

export const findMembroService = (id) => Membro.findById(id).lean();

export const findMembroAndUpdateService = (id, membro) => Membro.findById({_id: id}).then((membroUp)=>{
    membroUp = membro
    membroUp.save()
})
