THREE.MaskPass=function(b,c){this.scene=b;this.camera=c;this.clear=!0;this.needsSwap=!1};THREE.MaskPass.prototype={render:function(b,c,d){var a=b.context;a.colorMask(!1,!1,!1,!1);a.depthMask(!1);a.enable(a.STENCIL_TEST);a.stencilOp(a.REPLACE,a.REPLACE,a.REPLACE);a.stencilFunc(a.ALWAYS,1,4294967295);b.render(this.scene,this.camera,d,this.clear);b.render(this.scene,this.camera,c,this.clear);a.colorMask(!0,!0,!0,!0);a.depthMask(!0);a.stencilFunc(a.EQUAL,1,4294967295);a.stencilOp(a.KEEP,a.KEEP,a.KEEP)}};
THREE.ClearMaskPass=function(){};THREE.ClearMaskPass.prototype={render:function(b){b=b.context;b.disable(b.STENCIL_TEST)}};
