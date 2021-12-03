'use strict';

/**
 * @class Item
 */
class Item {
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
   * @type number|null
   */
  protected _sellIn: number | null;

  /**
   * @param {string} name
   * @param {number} quality
   * @param {number, null} sellIn
   */
  protected constructor(name: string, quality: number, sellIn: number | null) {
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
   * @return {number, null}
   */
  get sellIn(): number | null {
    return this._sellIn;
  }

  /**
   * @param {number, null} value
   */
  set sellIn(value: number | null) {
    this._sellIn = value;
  }
}
