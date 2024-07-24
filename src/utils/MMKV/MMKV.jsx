import Attributes from './Attributes';
import { MMKVLoader } from 'react-native-mmkv-storage';

export default class MMKV {
    constructor() {
        throw new Error("The MMKV class cannot be instantiated")
    }

    static _storage;
    static get storage() {
        if (!this._storage) this.init()
        return this._storage
    }

    static async init() {
        this._storage = new MMKVLoader().initialize();

        const attributesName = Object.keys(Attributes);

        for (const attrName of attributesName) {
            const { value, attribute } = this.find(attrName, true);

            if (value === null && value !== attribute.defaultValue) {
                this.set(attribute.defaultValue);
            }
        }
    }

    static async set(key, value) {
        const attribute = Attributes[key]
        if (!attribute) throw new Error(`Unknown attribute '${key}`)

        const type = typeof value
        if (type !== attribute.type) throw new Error(`Invalid type from attribute '${key}`)

        switch (type) {
            case 'string':
                this.storage.getString(value);
                break

            case 'boolean':
                this.storage.getBool(value);
                break

            case 'number':
                this.storage.getInt(value);
                break
        }
    }

    static async find(item, isStarting) {
        const attribute = Attributes[item]
        if (!attribute) throw new Error(`Unknown attribute '${item}`);

        let value
        switch (attribute.type) {
            case 'string':
                value = await this.storage.getString(item);
                break

            case 'boolean':
                value = await this.storage.getBool(item);
                break

            case 'number':
                value = await this.storage.getInt(item);
                break

            default:
                throw new Error(`Unsupported type for attribute '${item}'`)
        }

        return isStarting ? { value, attribute } : value
    }
}

