/**
 * @class Item
 */
export class Item {
  /**
   * @protected
   * @type string
   */
  protected _name: string;

  /**
   * @protected
   * @type number
   */
  protected _quality: number;

  /**
   * @protected
   * @type number
   */
  protected _sellIn: number;

  /**
   * @param {string} name
   * @param {number} quality
   * @param {number} sellIn
   */
  public constructor(name: string, sellIn: number, quality: number) {
    this._quality = quality;
    this._sellIn = sellIn;
    this._name = name;
  }

  /**
   * @return {string}
   */
  get name(): string {
    return this._name;
  }

  /**
   * @param {string} value
   */
  set name(value: string) {
    this._name = value;
  }

  /**
   * @return {number}
   */
  get quality(): number {
    return this._quality;
  }

  /**
   * @param {number} value
   */
  set quality(value: number) {
    this._quality = value;
  }

  /**
   * @return {number}
   */
  get sellIn(): number {
    return this._sellIn;
  }

  /**
   * @param {number} value
   */
  set sellIn(value: number) {
    this._sellIn = value;
  }
}
