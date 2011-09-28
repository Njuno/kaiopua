THREE.BloomPass=function(a,d,c,b){var a=a!==void 0?a:1,d=d!==void 0?d:25,c=c!==void 0?c:4,b=b!==b?b:256,e={minFilter:THREE.LinearFilter,magFilter:THREE.LinearFilter,format:THREE.RGBFormat};this.renderTargetX=new THREE.WebGLRenderTarget(b,b,e);this.renderTargetY=new THREE.WebGLRenderTarget(b,b,e);b=THREE.ShaderExtras.screen;this.screenUniforms=THREE.UniformsUtils.clone(b.uniforms);this.screenUniforms.opacity.value=a;this.materialScreen=new THREE.MeshShaderMaterial({uniforms:this.screenUniforms,vertexShader:b.vertexShader,
fragmentShader:b.fragmentShader,blending:THREE.AdditiveBlending,transparent:!0});a=THREE.ShaderExtras.convolution;this.convolutionUniforms=THREE.UniformsUtils.clone(a.uniforms);this.convolutionUniforms.uImageIncrement.value=THREE.BloomPass.blurx;this.convolutionUniforms.cKernel.value=THREE.ShaderExtras.buildKernel(c);this.materialConvolution=new THREE.MeshShaderMaterial({uniforms:this.convolutionUniforms,vertexShader:"#define KERNEL_SIZE "+d+".0\n"+a.vertexShader,fragmentShader:"#define KERNEL_SIZE "+
d+"\n"+a.fragmentShader});this.needsSwap=!1};
THREE.BloomPass.prototype={render:function(a,d,c,b,e){e&&a.context.disable(a.context.STENCIL_TEST);THREE.EffectComposer.quad.materials[0]=this.materialConvolution;this.convolutionUniforms.tDiffuse.texture=c;this.convolutionUniforms.uImageIncrement.value=THREE.BloomPass.blurX;a.render(THREE.EffectComposer.scene,THREE.EffectComposer.camera,this.renderTargetX,!0);this.convolutionUniforms.tDiffuse.texture=this.renderTargetX;this.convolutionUniforms.uImageIncrement.value=THREE.BloomPass.blurY;a.render(THREE.EffectComposer.scene,
THREE.EffectComposer.camera,this.renderTargetY,!0);THREE.EffectComposer.quad.materials[0]=this.materialScreen;this.screenUniforms.tDiffuse.texture=this.renderTargetY;e&&a.context.enable(a.context.STENCIL_TEST);a.render(THREE.EffectComposer.scene,THREE.EffectComposer.camera,c,!1)}};THREE.BloomPass.blurX=new THREE.Vector2(0.001953125,0);THREE.BloomPass.blurY=new THREE.Vector2(0,0.001953125);