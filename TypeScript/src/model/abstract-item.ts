'use strict';

/**
 * @class Item
 */
abstract class Item {
  /**
   * @private
   * @type string
   */
  private _name: string;
  /**
   * @private
   * @type number
   */
  private _quality: number;
  /**
   * @private
   * @type number
   */
  private _sellIn: number;

  /**
   * @param {string} name
   * @param {number} quality
   * @param {number} sellIn
   */
  protected constructor(name: string, quality: number, sellIn: number) {
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
