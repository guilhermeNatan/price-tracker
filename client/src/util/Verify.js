/*
 * Copyright (c) 2021. Crido por Guilherme Natan Barbosa Alecrim
 */

export default class Verify {
    static isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}
