
class ConditionalView {
  constructor(left, right, current = true, parent = left.parentNode || right.parentNode) {
    this.left = left;
    this.right = right;
    this.parent = parent;

    // If both are currently on, default to left
    if(left.parentNode === right.parentNode) {
      if(current) this.remove(right)
      else this.remove(left);
    }
  }
  
  remove(node) {
    if(node.parentNode === this.parent) {
      this.parent.removeChild(node);
    }
  }

  update(showLeft) {
    let { left, right, parent } = this;
    if(showLeft) {
      parent.insertBefore(left, right);
      this.remove(right); 
    } else {
      parent.insertBefore(right, left);
      this.remove(left);
    }
  }
}

export default ConditionalView;