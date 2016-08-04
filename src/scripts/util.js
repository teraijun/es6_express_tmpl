class Util {
  common (a, b) {
    if( !( typeof a === 'number' && typeof b === 'number' ) ) {
      throw new Error( 'Invalid argument type of not Number.' );
    }
  }

  sum( a, b ) {
    this.common(a, b);
    return ( a + b );
  }

  minus(a,b) {
    this.common(a, b);
    return (a - b);
  }
}
export default new Util();
