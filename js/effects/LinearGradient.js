var KAIOPUA=function(g){var h=g.effects=g.effects||{};(h.LinearGradient=h.LinearGradient||{}).generate=function(a){var e,g,f,i,j,k,d,l,b,h=["a","b","c","d"],c,m,a=a||{};f=a.colors||[16777215,0];k=a.stops||[];d=a.startBottom||!1;l=[];b=f.length;numFaces=b-1;e=new THREE.OrthoCamera(-0.5,0.5,0.5,-0.5,-1E4,1E4);e.position.z=100;g=new THREE.Scene;i=[new THREE.MeshLambertMaterial({color:a.baseColor||16777215,shading:THREE.FlatShading,vertexColors:THREE.VertexColors,depthTest:!1})];a.showWireframe===!0&&
(i[i.length]=new THREE.MeshBasicMaterial({color:a.wireColor||0,shading:THREE.FlatShading,wireframe:!0}));if(k.length!==f.length)for(a=0;a<b;a+=1)k[a]=a/(b-1);for(a=0;a<b;a+=1)c=d?b-1-a:a,l[c]=new THREE.Color(f[a]);f=new THREE.PlaneGeometry(1,1,1,numFaces);for(a=0;a<numFaces;a+=1)d=f.faces[a],c=f.vertices,b=c[d[h[0]]],c=c[d[h[3]]],m=k[a],b.position.y=0.5-1*m,c.position.y=0.5-1*m,b=l[a],c=l[a+1],d.vertexColors[0]=b,d.vertexColors[3]=b,d.vertexColors[1]=c,d.vertexColors[2]=c;j=new THREE.Mesh(f,i);j.position.z=
-100;g.addObject(j);return{scene:g,camera:e,resize:function(a,b){e.left=a/-2;e.right=a/2;e.top=b/2;e.bottom=b/-2;e.updateProjectionMatrix();j.scale.set(a,b,1)}}};return g}(KAIOPUA||{});
