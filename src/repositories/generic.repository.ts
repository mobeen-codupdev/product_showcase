import { Model, Document, FilterQuery } from 'mongoose'

export class GenericRepository<T extends Document> {
    constructor(private readonly model: Model<T>) {}

    async findAll(
        filter: FilterQuery<T> = {},
        sort: object = {},
        page: number | undefined = undefined,
        limit: number | undefined = undefined,
        populate: string[] = [],
    ): Promise<T[]> {
        let query: any = this.model.find(filter)

        if (Object.keys(sort).length > 0) {
            query = query.sort(sort)
        } else {
            query = query.sort({ updatedAt: -1 })
        }

        if (page !== undefined && limit !== undefined) {
            query = query.skip((page - 1) * limit).limit(limit)
        }

        if (populate.length > 0) {
            populate.forEach((name) => {
                query = query.populate(name)
            })
        }

        return query.exec()
    }

    async findById(
        id: string,
        sort: Record<number, 1 | -1> = {},
        page: number | undefined = undefined,
        limit: number | undefined = undefined,
        populate: string[] = [],
        lean: boolean = false,
    ): Promise<T | null> {
        let query: any = this.model.findById(id)

        if (Object.keys(sort).length > 0) {
            query = query.sort(sort)
        }

        if (page !== undefined && limit !== undefined) {
            query = query.skip((page - 1) * limit).limit(limit)
        }

        if (populate.length > 0) {
            populate.forEach((name) => {
                query = query.populate(name)
            })
        }

        return query.lean(lean).exec()
    }

    async findOne(
        filter: FilterQuery<T> = {},
        sort: Record<string, 1 | -1> = {},
        populate: string[] = [],
    ): Promise<T | null> {
        let query: any = this.model.findOne(filter)

        if (Object.keys(sort).length > 0) {
            query = query.sort(sort)
        }

        if (populate.length > 0) {
            populate.forEach((name) => {
                query = query.populate(name)
            })
        }

        return query.exec()
    }

    async create(item: Partial<T>): Promise<T> {
        const createdItem = new this.model(item)
        return createdItem.save()
    }

    async updateById(
        id: string,
        item: Partial<T>,
        populateField?: string,
    ): Promise<T | null> {
        let query: any = this.model.findByIdAndUpdate(id, item, { new: true })

        if (populateField) {
            query = query.populate(populateField)
        }

        return query.exec()
    }

    async deleteById(id: string): Promise<T | null> {
        return this.model.findByIdAndDelete(id).exec()
    }
    async deleteOne(filter: FilterQuery<T> = {}): Promise<T | null> {
        return this.model.findOneAndDelete(filter).exec()
    }
    async deleteAll(filter: FilterQuery<T> = {}): Promise<T | null | void> {
        this.model.deleteMany(filter).exec()
    }
}
